// import Head from "next/head";
// import About from "../Components/About";
// import Clients from "../Components/Clients";
// import Landing from "../Components/Landing";
// import Work from "../Components/Work";
// import Services from "../Components/Services";
// import styles from "../styles/Home.module.css";
// import App_Navbar from "../Components/App_Navbar";
// import Footer from "../Components/Footer";
// import Nav from "../Components/Nav";
// import { useEffect, useState } from "react";
// import DrawerAppBar from "../Components/Nav";
// import { useDispatch } from "react-redux";
// import { scrolled, notScrolled } from "../ReduxToolkit/ServicesSlice";

// export default function Home() {
//   const dispatch = useDispatch();

//   const handleResize = () => {
//     if (window.scrollY > 100) {
//       dispatch(scrolled());
//     } else {
//       dispatch(notScrolled());
//     }
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", handleResize);
//   }, [handleResize]);

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Skapluie</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* <App_Navbar /> */}
//       <DrawerAppBar />
//       <Landing />
//       <About />
//       <Services />
//       <Clients />
//       <Work />
//       <Footer />
//     </div>
//   );
// }