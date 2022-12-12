import React, { useEffect } from "react";
import styles from "../styles/Work.module.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Container } from "react-bootstrap";
import Pagination from "../Components/Pagination";
import DrawerAppBar from "../Components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { scrolled, notScrolled } from "../ReduxToolkit/Store/scrollingSlice";
import App_Navbar from "../Components/App_Navbar";
import Footer from "../Components/Footer";
import { pageMotion } from "../AnimatedRoutes";
import { motion } from "framer-motion";
import { useSelect } from "@mui/base";
import { getServices } from "../ReduxToolkit/ServicesSlice";
import { getAllWork, getWork } from "../ReduxToolkit/Store/workSlice";

const Work = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const handleResize = () => {
    if (window.scrollY > 100) {
      dispatch(scrolled());
    } else {
      dispatch(notScrolled());
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleResize);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [handleResize]);

  const { services } = useSelector((state) => state.services);
  const imgsArray = [
    "/Work/1 (1).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (5).png",
    "/Work/1 (6).png",
    "/Work/1 (1).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (5).png",
    "/Work/1 (6).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (5).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (1).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (5).png",
    "/Work/1 (6).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (5).png",
    "/Work/1 (6).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (5).png",
    "/Work/1 (6).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
    "/Work/1 (5).png",
    "/Work/1 (6).png",
    "/Work/1 (2).png",
    "/Work/1 (3).png",
    "/Work/1 (4).png",
  ];

  const tabClickHandler = (key) => {
    if (key === "All") {
      dispatch(getAllWork());
    } else {
      dispatch(getWork(key));
    }
  };
  const { work } = useSelector((state) => state.work);
  return (
    <>
      <App_Navbar />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageMotion}
      >
        <div className={styles.Work}>
          <Container>
            <h2 className={styles.Header}>Our Works</h2>
            <span className={styles.Breadcrumb}>Home {">"} Services</span>

            <Tabs
              onSelect={(key) => {
                tabClickHandler(key);
              }}
              defaultActiveKey="All"
              transition={false}
              id="noanim-tab-example"
              className={`mb-3 ${styles.TabsWrapper} container`}
            >
              <Tab eventKey={"All"} title={"All"}>
                <Pagination items={work} itemsPerPage={9} />
              </Tab>
              {services.map((service, idx) => (
                <Tab eventKey={service.name} title={service.name} key={idx}>
                  <Pagination items={work} itemsPerPage={10} />
                </Tab>
              ))}
            </Tabs>
          </Container>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default Work;
