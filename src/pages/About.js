import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import App_Navbar from "../Components/App_Navbar";
import Footer from "../Components/Footer";
import DrawerAppBar from "../Components/Nav";
import styles from "../styles/About.module.scss";
import { motion } from "framer-motion";
import { pageMotion } from "../AnimatedRoutes";
import { useDispatch } from "react-redux";
import { getAbout } from "../ReduxToolkit/ServicesSlice";

const About = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    // dispatch(getAbout("Our Vision"));
  });

  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageMotion}
      >
        <App_Navbar />
        <div className={styles.About}>
          <img src="./skapluie png 4.png" alt="" className={styles.backImg} />
          <Container style={{ position: "relative" }}>
            <h2 className={styles.Header}>About</h2>

            <Row className={styles.AboutWrapper}>
              <Col className={styles.firstCol}>
                <h2>
                  Welcome to Skapluie <br />
                  Marketing Solutions For Businesses.
                </h2>
                <p>
                  Digital agencies are strategic and creative marketing agencies
                  focused on user experience, mobile, social, data gathering and
                  analytics Digital agencies are strategic and creative
                  marketing agencies focused.
                </p>
              </Col>

              <Col className={styles.secondCol}>
                <Col className={styles.secondCol__text}>
                  <h2>Our Vision</h2>
                  <p>
                    We integrate systems and technologiy designed by our team
                    with the most advanced tech available to deliver more
                    reliable and efficint energy projects, our global platform
                    is our strength
                  </p>
                </Col>
                <Col className={styles.secondCol__img}>
                  <img src="./goal.png" alt="" />
                </Col>
              </Col>

              <Col className={styles.thirdCol}>
                <Col className={styles.thirdCol__img}>
                  <img src="./check list.png" alt="" />
                </Col>
                <Col className={styles.thirdCol__text}>
                  <h2>Our Vision</h2>
                  <p>
                    We integrate systems and technologiy designed by our team
                    with the most advanced tech available to deliver more
                    reliable and efficint energy projects, our global platform
                    is our strength
                  </p>
                </Col>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default About;
