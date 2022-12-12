import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import styles from "../styles/Blogs.module.scss";
import BlogCard from "./BlogCard";

const Pagination = ({ items, itemsPerPage }) => {
  // Example items, to simulate fetching from another resources.

  console.log(items);

  const scrollFunction = () => {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 200);
  };

  function Items({ currentItems }) {
    return (
      <div className={styles.BlogsWrapper}>
        {currentItems &&
          currentItems.map((item, idx) => (
            <>
              <BlogCard id={`item-${idx}`} item={item} key={idx} />
            </>
          ))}
        {console.log(currentItems)}
      </div>
    );
  }

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    scrollFunction();
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
