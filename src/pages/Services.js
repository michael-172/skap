import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/ServicesPage.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DrawerAppBar from "../Components/Nav";
import Footer from "../Components/Footer";
import App_Navbar from "../Components/App_Navbar";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getService } from "../ReduxToolkit/ServicesSlice";
import { pageMotion } from "../AnimatedRoutes";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Services = () => {
  const sercviceId = useParams();
  console.log(sercviceId.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getService(sercviceId.id));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [dispatch]);

  const { services } = useSelector((state) => state);
  const service = services.service;

  return (
    <>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageMotion}
      >
        <App_Navbar />

        <div className={styles.Services}>
          <Container style={{ marginBottom: "50px" }}>
            <h2 className={styles.Header}>Services</h2>
            <Row className={styles.Services__Top}>
              <Col sm={12} md={6} className={styles.Services_Text}>
                <img
                  src={"/Clients/Clients-Background.png"}
                  width={400}
                  height={400}
                  alt={"services section background"}
                  className={styles.ServicesBackground}
                />
                <span className={styles.Breadcrumb}>Home {">"} Services</span>
                <h2 className={styles.Service_Name}>{service?.name}</h2>
                <p className={styles.ServiceDesc}>{service?.description}</p>
                <p className={styles.someClients}>
                  Some of {service?.name} Clints
                </p>
                <Row className={styles.Partners}>
                  <Col>
                    <img
                      src={"/Services Page/huawei-logo-png-7000 3.png"}
                      width={61}
                      height={61}
                      alt={"Huawei"}
                    />
                  </Col>
                  <Col>
                    <img
                      src={"/Services Page/vodafone-png-logo-8432 7.png"}
                      width={61}
                      height={61}
                      alt={"Huawei"}
                    />
                  </Col>
                  <Col>
                    <img
                      src={"/Services Page/starbucks-logo-png-1688 7.png"}
                      width={61}
                      height={61}
                      alt={"Huawei"}
                    />
                  </Col>
                  <Col>
                    <img
                      src={"/Services Page/vodafone-png-logo-8432 7.png"}
                      width={61}
                      height={61}
                      alt={"Huawei"}
                    />
                  </Col>
                </Row>

                <div className={styles.Button_Container}>
                  <Link to="/Contact">
                    <button className={styles.Text_Button}>Contact Us</button>
                  </Link>
                </div>
              </Col>
              <Col sm={12} md={6} className={styles.Service_Img_Col}>
                <img
                  src={`${service?.mainImage}`}
                  width={551}
                  height={558}
                  alt={"full"}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "400px",
                    width: "auto",
                    height: "auto",
                  }}
                  priority
                  className={styles.ServiceImg}
                />
              </Col>
            </Row>

            <Row className={styles.Services__Bottom}>
              <h2 className={styles.Servces_Slider_Header}>
                <b>Sample of </b> PhotoSession works
              </h2>

              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 3,
                    partialVisibilityGutter: 100,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 100,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 2,
                    partialVisibilityGutter: 100,
                  },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                {service?.serviceImagesURL?.length > 0 &&
                  service?.serviceImagesURL?.map((el) => (
                    <img
                      src={el}
                      width={300}
                      height={300}
                      alt={"Huawei"}
                      style={{ maxWidth: "100%" }}
                    />
                  ))}
              </Carousel>
            </Row>
          </Container>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};
export default Services;
