import Profile from "./pages/profile/Profile";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./helper";
const ProtectedRoute = ({ children}) => {
  console.log("protectedroute me");
  let navigate = useNavigate();
  axios
    .post(BASE_URL+"/auth", {
      store: localStorage.getItem("token"),q:localStorage.getItem("hello"),
    })
    .then((response) => {
      console.log(response.data.message);
      if (response.data.message === 0) {
        // navigate("/");
        console.log("hiiiii");
        navigate("/");
      }
    })
    .catch((err) => {
      console.log(err);
      navigate("/");
    });
  return children;
};

export default ProtectedRoute;
