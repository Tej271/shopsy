import { Typography } from "@mui/material";
import LoginCard from "../components/LoginCard";

function Login() {
  return (
    <div>
      <Typography style={{ textAlign: "center", fontSize: 28, margin: "50px 0px" }}>
        Login to start shopping!
      </Typography>
      <LoginCard />
    </div>
  );
}

export default Login;
