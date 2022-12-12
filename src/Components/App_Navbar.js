import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/Navbar.module.scss";
import { HashLink } from "react-router-hash-link";
import { NavHashLink } from "react-router-hash-link";

const App_Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    window.addEventListener("scroll", handleScroll);
  }, [window.scrollY]);

  const scrollToServices = () => {
    // window.scrollBy(0, 900)
    // document.querySelector(".offcanvas-backdrop").remove()
    // document.querySelector(".offcanvas").remove()
  };
  // Get the navbar

  // const links = [
  //   { name: "Home", href: "/" },
  //   { name: "Services", href: "/#Services" },
  //   { name: "About", href: "/About" },
  //   { name: "Work", href: "/Work" },
  //   { name: "Clients", href: "/#Clients" },
  //   { name: "Blogs", href: "/Blogs" },
  //   { name: "Contact", href: "/Contact" },
  // ];
  const location = `${useLocation().pathname}${useLocation().hash}`;
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={`${styles.Navbar} ${
            scrolled === true ? "scrolled" : ""
          } navbar-expand-lg`}
        >
          <Container>
            <Link to={"/"}>
              <Navbar.Brand>
                <img
                  src={"../Asset 9.svg"}
                  width={201}
                  height={90}
                  alt="logo"
                  className={styles.NavbarBrand}
                />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className={styles.NavbarMobileMenu}
            >
              <img
                src={"/BurgerIcon.png"}
                width={30}
                height={21}
                alt="mobileMenuIcon"
              />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              tabIndex=""
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    src={"../Asset 9.svg"}
                    width={201}
                    height={90}
                    alt="logo"
                    className={styles.NavbarBrand}
                  />{" "}
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className="navbarLinks justify-content-end flex-grow-1 pe-3 gap-4"
                  style={{ position: "relative" }}
                >
                  <Link
                    to={`/`}
                    onClick={() => {
                      setActiveLink("Home");
                    }}
                  >
                    <Nav.Item
                      className={`nav-link ${location === "/" ? "active" : ""}`}
                    >
                      Home
                    </Nav.Item>
                  </Link>

                  <HashLink
                    to="/#Services"
                    onClick={() => {
                      setActiveLink("Services");
                    }}
                  >
                    <Nav.Item
                      className={`nav-link ${
                        location === "/#Services" ? "active" : ""
                      }`}
                    >
                      Services
                    </Nav.Item>
                  </HashLink>

                  <Link
                    to={`/About`}
                    onClick={() => {
                      setActiveLink("About");
                    }}
                  >
                    <Nav.Item
                      className={`nav-link ${
                        location === "/About" ? "active" : ""
                      }`}
                    >
                      About
                    </Nav.Item>
                  </Link>
                  <Link
                    to={`/Work`}
                    onClick={() => {
                      setActiveLink("Work");
                    }}
                  >
                    <Nav.Item
                      className={`nav-link ${
                        location === "/Work" ? "active" : ""
                      }`}
                    >
                      Work
                    </Nav.Item>
                  </Link>

                  <HashLink
                    to="/#Clients"
                    onClick={() => {
                      setActiveLink("Clients");
                    }}
                  >
                    <Nav.Item
                      className={`nav-link ${
                        location === "/#Clients" ? "active" : ""
                      }`}
                    >
                      Clients
                    </Nav.Item>
                  </HashLink>

                  <Link
                    to={`/Blogs`}
                    onClick={() => {
                      setActiveLink("Blogs");
                    }}
                  >
                    <Nav.Item
                      className={`nav-link ${
                        location === "/Blogs" ? "active" : ""
                      }`}
                    >
                      Blogs
                    </Nav.Item>
                  </Link>

                  <Link
                    to={`/Contact`}
                    onClick={() => {
                      setActiveLink("Contact");
                    }}
                  >
                    <Nav.Item
                      className={`nav-link ${
                        location === "/Contact" ? "active" : ""
                      }`}
                    >
                      Contact
                    </Nav.Item>
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default App_Navbar;
