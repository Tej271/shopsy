import React from "react";
import { SignUpCard } from "@components/";
import { Typography } from "@mui/material";
import "./signup.module.css";

const Signup = () => {
  return (
    <div>
      <Typography className="heading">Sign up for Shopping!</Typography>
      <SignUpCard />
    </div>
  );
};

export default Signup;
