import React from "react";

const Hoc = (Prospect) => {
  console.log(Prospect);

  const color = ["pink", "red", "black", "blue", "green"];
  const randomColor = color[Math.floor(Math.random() * color.length)];

  return (props) => {
    return (
      <div style={{ color: randomColor }}>
        <Prospect />
      </div>
    );
  };
};

export default Hoc;

// 0 & 1
