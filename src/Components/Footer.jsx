import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  const [largeScreen, setLargeScreen] = useState(true);

  const handleResize = () => {
    if (window.innerWidth > 992) {
      setLargeScreen(true);
    } else {
      setLargeScreen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    window.innerWidth > 992 ? setLargeScreen(true) : setLargeScreen(false);
  }, [handleResize]);

  return (
    <footer className={styles.Footer}>
      <div
        className={`${largeScreen ? "container" : "container-fluid"} ${
          styles.Footer_container
        }`}
      >
        <Row className={styles.Footer_Row}>
          <Col className={` ${styles.column} first`} md={4}>
            <img
              src={"/Clients/Clients-Background.png"}
              width={378}
              height={477}
              className={styles.footerBack}
              alt={"clientsBack"}
            />
            <img
              src={"/footer logo.png"}
              width={139}
              height={71}
              alt={"footer logo"}
              className={styles.FooterLogo}
            />
            <span className={styles.firstSpan}>
              Skapluie Marketing Solutions <br /> For Businesses.
            </span>
            <span>
              Copyright © 2022 All right <br /> reserved
            </span>
          </Col>
          <Col className={`second ${styles.column}`} md={4}>
            <h3 className={`${styles.QuickLinks}`}>Quick Links</h3>
            <ul className={styles.footerUl}>
              <Link to="/About" className="footer-link">
                <li>About Company</li>
              </Link>
              <Link to="/#Services" className="footer-link">
                <li>Our Services</li>
              </Link>
              <Link to="/Work" className="footer-link">
                <li>Our Clients</li>
              </Link>
              <Link to="/Work" className="footer-link">
                <li>Our works</li>
              </Link>
              <Link to="/Contact" className="footer-link">
                <li>Contact Us</li>
              </Link>
            </ul>
          </Col>
          <Col className={`${styles.column} ${styles.thirdColumn}`} md={4}>
            <span>Call Us Today</span>
            <h1 className={styles.PhoneNumber}>+ 22 3545 4353</h1>
            <Row style={{ width: "fit-content" }} className={styles.SocialMediaParent}>
              <Col className="justify-content-center d-flex">
                <img
                  src={"/footer/Facebook.png"}
                  width={40}
                  height={40}
                  alt={"clientsBack"}
                />
              </Col>
              <Col className="justify-content-center d-flex">
                <img
                  src={"/footer/Twitter.png"}
                  width={40}
                  height={40}
                  alt={"clientsBack"}
                />
              </Col>
              <Col className="justify-content-center d-flex">
                <img
                  src={"/footer/Youtube.png"}
                  width={40}
                  height={40}
                  alt={"clientsBack"}
                />
              </Col>
              <Col className="justify-content-center d-flex">
                <img
                  src={"/footer/Linkedin.png"}
                  width={40}
                  height={40}
                  alt={"clientsBack"}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
