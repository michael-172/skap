import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import App_Navbar from "../Components/App_Navbar";
import BlogCard from "../Components/BlogCard";
import Footer from "../Components/Footer";
import styles from "../styles/Blogs.module.scss";
import PaginationForBlogs from "../Components/PaginationForBlogs";
import { pageMotion } from "../AnimatedRoutes";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../ReduxToolkit/Store/blogsSlice";

const Blogs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const { blogs } = useSelector((state) => state.blogs);
  console.log(blogs);
  return (
    <>
      <App_Navbar />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageMotion}
      >
        <div className={styles.Blogs}>
          <Container>
            <h2 className={styles.Header}>Blogs</h2>
            <span className={styles.Breadcrumb}>Home {">"} Blogs</span>

            <PaginationForBlogs items={blogs} itemsPerPage={10} />
          </Container>
        </div>

        <Footer />
      </motion.div>
    </>
  );
};

export default Blogs;
