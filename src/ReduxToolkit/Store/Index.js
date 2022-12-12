import { configureStore } from "@reduxjs/toolkit";
// import user from "./usersSlice";
import services from "../ServicesSlice";
import about from "../Store/aboutSlice";
import scrolling from "../Store/scrollingSlice";
import clients from "../Store/clientsSlice";
import blogs from "../Store/blogsSlice";
import work from "../Store/workSlice";

export const store = configureStore({
  reducer: { services, about, scrolling, clients, blogs, work },
});
