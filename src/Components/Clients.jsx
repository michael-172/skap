import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Clients.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getClients } from "../ReduxToolkit/Store/clientsSlice";
import { useDispatch, useSelector } from "react-redux";

const Clients = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  const { clients } = useSelector((state) => state.clients);
  console.log(clients);

  const [largeScreen, setLargeScreen] = useState(true);
  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setLargeScreen(true);
    } else {
      setLargeScreen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.innerWidth > 1200 ? setLargeScreen(true) : setLargeScreen(false);
  }, [handleResize]);

  return (
    <div className={styles.Clients} id="Clients">
      <h2 className={styles.Clients__Heading}>Our Clients</h2>
      {largeScreen ? (
        <Container className={styles.ClientsContainer}>
          <img
            className={styles.Background}
            src={"/Clients/Clients-Background.png"}
            width={400}
            height={800}
            alt={"background"}
          />

          <div className={styles.ClientsWrapper} style={{ flexWrap: "wrap" }}>
            {clients?.length > 0 &&
              clients?.map((el, idx) => (
                <img
                  key={idx}
                  className={styles.Client}
                  src={el.description}
                  width={61}
                  height={61}
                  alt={"background"}
                />
              ))}
          </div>
        </Container>
      ) : (
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
              partialVisibilityGutter: 0,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 0,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 3,
              partialVisibilityGutter: 0,
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
          <img
            src={"/Our Services/Frame 7191.png"}
            style={{ maxWidth: "100%" }}
            alt="service1"
          />

          <img
            src={"/Our Services/Frame 7191.png"}
            style={{ maxWidth: "100%" }}
            alt="service1"
          />

          <img
            src={"/Our Services/Frame 7191.png"}
            style={{ maxWidth: "100%" }}
            alt="service1"
          />

          <img
            src={"/Our Services/Frame 7191.png"}
            style={{ maxWidth: "100%" }}
            alt="service1"
          />

          <img
            src={"/Our Services/Frame 7191.png"}
            style={{ maxWidth: "100%" }}
            alt="service1"
          />
        </Carousel>
      )}
    </div>
  );
};

export default Clients;
