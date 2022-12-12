import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import styles from "../styles/Work.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../ReduxToolkit/ServicesSlice";
import { getAllWork, getWork } from "../ReduxToolkit/Store/workSlice";

const Work = () => {
  const [largeScreen, setLargeScreen] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllWork());
  }, [dispatch]);

  const { work } = useSelector((state) => state.work);
  console.log(work);

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
    <div className={styles.WorkSection}>
      <Container className={styles.WorkContainer}>
        <h2 className="Work_Header">Our Work</h2>
        <Link to="/Work" className={styles.seeMoreLink}>
          See More
        </Link>
      </Container>

      {largeScreen ? (
        <Container style={{ height: "660px", marginBottom: "50px" }}>
          <div className="slide parent">
            {work.slice(0, 7).map((w, idx) => (
              <div className={`div${idx + 1}`}>
                <img src={w.workImages} alt={"test_alt"} />
              </div>
            ))}
          </div>
        </Container>
      ) : (
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
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
              items: 1,
              partialVisibilityGutter: 0,
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
          <img
            src={"/Work/1 (7).png"}
            alt={"test_alt"}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <img
            src={"/Work/1 (2).png"}
            alt={"test_alt"}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <img
            src={"/Work/1 (3).png"}
            alt={"test_alt"}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <img
            src={"/Work/1 (4).png"}
            alt={"test_alt"}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <img
            src={"/Work/1 (1).png"}
            alt={"test_alt"}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <img
            src={"/Work/1 (5).png"}
            alt={"test_alt"}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <img
            src={"/Work/1 (6).png"}
            alt={"test_alt"}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Carousel>
      )}
    </div>
  );
};

export default Work;
