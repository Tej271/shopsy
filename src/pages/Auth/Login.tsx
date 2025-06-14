import { Typography } from "@mui/material";
import LoginCard from "../../components/LoginCard/LoginCard";
import styles from "./login.module.css";

function Login() {
  return (
    <div>
      <Typography className={styles.heading}>Login to start shopping!</Typography>
      <LoginCard />
    </div>
  );
}

export default Login;
