import React from "react";
import NavBar from "../components/Navbar";

const Main = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
};

export default Main;
