import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import styles from "../styles/ClientsPage.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import App_Navbar from "../Components/App_Navbar";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../ReduxToolkit/Store/clientsSlice";
import { useParams } from "react-router-dom";
import { getAllWork } from "../ReduxToolkit/Store/workSlice";

const Clients = () => {
  const dispatch = useDispatch();
  const clientId = useParams();
  console.log(clientId.id);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  useEffect(() => {
    dispatch(getClients(clientId.id));
    dispatch(getAllWork());
  }, [dispatch]);

  const { clients } = useSelector((state) => state.clients);
  const { work } = useSelector((state) => state.work);

  console.log(clients);

  console.log(work);

  const filteredWork = work.filter((el) => el.clientId == clientId.id);

  console.log(filteredWork);
  return (
    <>
      <App_Navbar />
      <div className={styles.Clients}>
        <Container>
          <h2 className={styles.Header}>Our Clients</h2>
          <span className={styles.Breadcrumb}>Home {">"} Clients</span>

          <Row className={styles.client_Text}>
            <div className={styles.Heading}>
              <img src={clients.description} width={60} height={60} />
              <h2 className={styles.clientName}>{clients.name}</h2>
            </div>

            <p className={styles.description}>{clients.logo}</p>

            <button className={styles.Text_Button}>Contact Us</button>
          </Row>

          <Row className={styles.Clients__Bottom}>
            <h2 className={styles.Clients_Slider_Header}>
              Sample of Clint works
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
                  items: 2,
                  partialVisibilityGutter: 30,
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
              {filteredWork.map((work) => (
                <img
                  src={work.workImages}
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
    </>
  );
};

export default Clients;
