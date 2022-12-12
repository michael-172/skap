import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Services.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../ReduxToolkit/ServicesSlice";
import { Link } from "react-router-dom";

const Services = () => {
  const servicesFromApi = useSelector((state) => state.services.services);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);
  const [largeScreen, setLargeScreen] = useState(true);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setLargeScreen(true);
    } else {
      setLargeScreen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    window.innerWidth > 768 ? setLargeScreen(true) : setLargeScreen(false);
  }, [handleResize]);

  return (
    <div className={styles.Services} id="Services">
      <h2 className={styles.About__Heading}>Our Services</h2>
      {largeScreen ? (
        <div className={`${largeScreen ? "container" : "container-fluid"}`}>
          <Row>
            {servicesFromApi?.length <= 5 ? (
              servicesFromApi?.map((service, index) => (
                <Link
                  to={`/Services/${service.servieId}`}
                  className={styles.imgHolder}
                  key={index}
                >
                  <Col
                    style={{
                      width: `calc(100% / ${servicesFromApi.length}) !important`,
                    }}
                  >
                    <div className={styles.imgHolder__WithHover}>
                      <img
                        src={service.mainImage}
                        width={247}
                        height={496}
                        alt={service.name}
                        className={styles.Serviceimg}
                      />
                      <div>{service.name}</div>
                    </div>
                    <span className={styles.About__Span}>{service.name}</span>
                  </Col>
                </Link>
              ))
            ) : (
              <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="ServicesCarouselMoreThan5"
                dotListClass="ServicesCarouselMoreThan5__dotList"
                draggable
                focusOnSelect={false}
                infinite={false}
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
                    items: 4,
                    partialVisibilityGutter: 0,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 3,
                    partialVisibilityGutter: 30,
                  },
                }}
                rewind={true}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={true}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                {servicesFromApi?.map((ser, index) => (
                  <Link
                    to={`/Services/${ser.servieId}`}
                    className={styles.imgHolder}
                    key={index}
                  >
                    <img
                      src={ser.mainImage}
                      width={259}
                      height={270}
                      alt="service1"
                      key={index}
                      style={{
                        objectFit: "cover",
                        maxWidth: "100%",
                        objectPosition: "center",
                      }}
                    />
                  </Link>
                ))}
              </Carousel>
            )}
          </Row>
        </div>
      ) : (
        <>
          {servicesFromApi && (
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container-fluid"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={false}
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
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 3,
                  partialVisibilityGutter: 30,
                },
              }}
              rewind={true}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={true}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {servicesFromApi?.map((ser, index) => (
                <Link
                  to={`/Services/${ser.id}`}
                  className={styles.imgHolder}
                  key={index}
                >
                  <img
                    src={ser.mainImage}
                    width={259}
                    height={270}
                    alt="service1"
                    key={index}
                    style={{
                      objectFit: "cover",
                      maxWidth: "100%",
                      objectPosition: "center",
                    }}
                  />
                </Link>
              ))}
            </Carousel>
          )}
        </>
      )}
    </div>
  );
};

export default Services;
