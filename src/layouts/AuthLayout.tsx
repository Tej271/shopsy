import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

function AuthLayout() {
  return (
    <div>
      <NavBar type={"auth"} />
      <Outlet />
    </div>
  );
}

export default AuthLayout;
