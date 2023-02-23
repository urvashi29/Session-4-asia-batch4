import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./Components/Employee";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";

const Router = () => {
  return (
    <>
      {/* in react-router-dom 5  */}
      {/* <BrowserRouter>
        <Route path="" component={Home}/>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </BrowserRouter> */}

      {/* in react-router-dom 6  */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/employee/:post_id" element={<Post />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
