import React from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.About}>
      <Container>
        <h2 className={styles.About__Heading}>About us</h2>
        <p className={styles.About__Paragraph}>
          Skapluie Marketing Solutions For Businesses Looking to Target The
          Superyacht Industry.
          <br /> From Printed Directories To Online Ads.
          <br /> We Can Help You Reach Industry Decision-Makers.
          <span id="Services"></span>
        </p>
      </Container>
    </div>
  );
};

export default About;
