import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/Landing.module.scss";
const Landing = () => {
  const [isSmallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth < 1200) {
        setSmallScreen(window.innerWidth);
      } else {
        setSmallScreen(window.innerWidth);
      }
    };
  });
  return (
    <div className={styles.Landing}>
      <div
        className={`${
          isSmallScreen === true ? `container-fluid` : "container"
        }`}
        style={{ height: "100%" }}
      >
        <Row style={{ height: "100%" }}>
          <Col
            md={6}
            sm={12}
            xs={12}
            className={styles.Text}
            style={{ height: "100%" }}
          >
            <img
              src={"/Landing_Text_Back.png"}
              width={400}
              height={400}
              alt={"text-background"}
              className={styles.TextBackground}
            />
            <h2 className={styles.Text_Heading}>start your business growth</h2>

            <div className={styles.Button_Container}>
              <Link to="/Contact">
                <button className={styles.Text_Button}>Contact Us</button>
              </Link>
            </div>
          </Col>
          <Col
            md={6}
            sm={12}
            xs={12}
            className="d-flex align-items-center justify-content-center"
            style={{ paddingTop: "60px" }}
          >
            <img
              src={"./landing.png"}
              alt={"landing img"}
              className={styles.Landingimg}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Landing;
