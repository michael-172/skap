import { useSelect } from "@mui/base";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getService } from "../ReduxToolkit/ServicesSlice";
import styles from "../styles/BlogCard.module.scss";

const BlogCard = ({ item, serviceId }) => {
  const dispatch = useDispatch();
  console.log(serviceId);

  useEffect(() => {
    dispatch(getService(serviceId));
  }, [dispatch]);
  const { service } = useSelector((state) => state.services);

  return (
    <div className={styles.BlogCard}>
      <Link to={`/Blogs/${item.blogId}`}>
        <img src={item.mainImagePath} alt="" />
        <div className={styles.text}>
          <div className={styles.text__top}>
            <h2 className={styles.field}>{"Digital Marketing"}</h2>
            <span className={styles.date}>{item.createdAt.slice(0, 10)}</span>
          </div>
          <h2 className={styles.text__bottom}>{item.title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
