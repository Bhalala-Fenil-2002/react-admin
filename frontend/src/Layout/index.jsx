import React, { useEffect } from "react";
import SideBar from "./sidebar";
import NavBar from "./navbar";

const Index = ({ children }) => {
  useEffect(() => {
    handleUserVerify();
  }, []);

  let handleUserVerify = () => {
    let token = localStorage.getItem(process.env.REACT_APP_SECRET_KEY);
    if (token === undefined || token === "" || token === null) {
      window.location.href = "/";
    }
  };
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="container_wrapper">{children}</div>
    </>
  );
};

export default Index;
