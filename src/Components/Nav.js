// import * as React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { Container } from "@mui/system";
// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Link from "next/link";
// import { scrollToPoint } from "../ReduxToolkit/ServicesSlice";

// const drawerWidth = 240;
// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/About" },
//   { name: "Services", href: "/Services" },
//   { name: "Our Work", href: "/Work" },
//   { name: "Blogs", href: "/Blogs" },
// ];

// function DrawerAppBar({ window }) {
//   // const userouter = useRouter();
//   // let router = userouter.asPath;
//   // console.log(router);
//   const dispatch = useDispatch();
//   const scrollValue = useSelector((state) => state.scrolling.scroll);

//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <Box
//       onClick={handleDrawerToggle}
//       sx={{
//         textAlign: "center",
//       }}
//     >
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item, idx) => (
//           <ListItem key={idx} disablePadding>
//             <ListItemButton sx={{ textAlign: "center" }}>
//               <ListItemText primary={item.name} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex", zIndex: 50 }} position={"sticky"}>
//       <AppBar
//         component="nav"
//         sx={{
//           backgroundColor: scrollValue ? "#FFF" : "transparent",
//           boxShadow: "none",
//           transition: "0.2s ease-in-out",
//           boxShadow: scrollValue ? "0px 0px 12px 1px #d5d5d575" : "none",
//         }}
//       >
//         <Container>
//           <Toolbar
//             sx={{ justifyContent: "space-between", padding: "0 !important" }}
//           >
//             <IconButton
//               color="inherit"
//               aria-label="open drawer"
//               edge="start"
//               onClick={handleDrawerToggle}
//               sx={{ mr: 2, display: { sm: "none" } }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Link href={"/"}>
//               <img
//                 src={"/Asset 9.svg"}
//                 width={220}
//                 height={100}
//                 alt={"logo"}
//                 sx={{
//                   flexGrow: 1,
//                   display: { xs: "none", sm: "block" },
//                   height: "auto",
//                 }}
//               />
//             </Link>
//             <Box sx={{ display: { xs: "none", sm: "block" } }}>
//               {navItems.map((item, idx) => (
//                 <Link href={`${item.href}`} key={idx}>
//                   <Button
//                     sx={{
//                       color: "#666666",
//                       borderRadius: "0px !important",
//                       transition: "0.3s",
//                       borderColor: "transparent",
//                       borderBottom: "#3EBD9E",
//                     }}
//                   >
//                     {item.name}
//                   </Button>
//                 </Link>
//               ))}
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//       <Box component="nav">
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box component="main" sx={{ p: 3 }}></Box>
//     </Box>
//   );
// }

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default DrawerAppBar;
