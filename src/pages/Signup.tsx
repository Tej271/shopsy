import React from 'react';
import SignUpCard from '../components/SignUpCard';
import { Typography } from "@mui/material";

const Signup = () => {
  return (
    <div>
      <Typography style={{ textAlign: "center", fontSize: 28, margin: "50px 0px" }}>
        Sign up for Shopping!
      </Typography>
      <SignUpCard />
    </div>
  );
}

export default Signup