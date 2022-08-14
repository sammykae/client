// import React from "react";
// import { Routes, Route, useParams, useLocation } from "react-router-dom";
// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Settings from "./pages/settings/Settings";
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
// import About from "./pages/about/About";
// import Contact from "./pages/contact/Contact";
// import ErrorPage from "./pages/errorPage/ErrorPage";
// import Posts from "./components/posts/Posts";

// import { AnimatePresence } from "framer-motion/dist/framer-motion";
// function AnimatedRoutes() {
//   const location = useLocation();
//   return (
//     <AnimatePresence>
//       <Routes location={location} key={location.pathname}>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/login" element={<Login />}></Route>
//         <Route path="/posts/:id" element={<Posts />}></Route>
//         <Route path="/register" element={<Register />}></Route>
//         <Route path="/write" element={<Write />}></Route>
//         <Route path="/settings" element={<Settings />}></Route>
//         <Route path="/about" element={<About />}></Route>
//         <Route path="/contact" element={<Contact />}></Route>
//         <Route path="/Single" element={<Single />}></Route>
//         <Route path="/post/:postId" element={<Single />}></Route>
//         <Route path="*" element={<ErrorPage />}></Route>
//       </Routes>
//     </AnimatePresence>
//   );
// }

// export default AnimatedRoutes;
