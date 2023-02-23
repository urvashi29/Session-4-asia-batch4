import React from "react";
import { useNavigate } from "react-router-dom";
import Hoc from "./Hoc";

const Contact = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/employee"); //to redirect
  }, 2000);

  return (
    <div>
      <h2>Contact Us</h2>
      <p>Contact Number: 000000000</p>
      <p>Email: admin@gmail.com</p>
    </div>
  );
};

export default Hoc(Contact);

// 2000 ms = 1 s

// setTimeout
// setInterval
