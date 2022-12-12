import { useSelect } from "@mui/base";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getService } from "../ReduxToolkit/ServicesSlice";
import styles from "../styles/BlogCard.module.scss";

const BlogCard = ({ item }) => {
  console.log(item.serviceId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getService(item.serviceId));
  }, [dispatch]);
  const { service } = useSelector((state) => state.services);
  return (
    <div className={styles.BlogCard}>
      <Link to={`/Blogs/${item.blogId}`}>
        <img src={item.mainImagePath} alt="" />
        <div className={styles.text}>
          <div className={styles.text__top}>
            <h2 className={styles.field}>{service.name}</h2>
            <span className={styles.date}>Februari 24,2022</span>
          </div>
          <h2 className={styles.text__bottom}>{item.title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
