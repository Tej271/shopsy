import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartSharpIcon from "@mui/icons-material/AddShoppingCartSharp";
import { useLocation, useNavigate } from "react-router";

type NavBarPropsType = {
  type: "auth" | "app";
};

function NavBar(props: NavBarPropsType) {
  const { type } = props;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isLogin = pathname.includes("login");

  const handleAuth = () => {
    navigate(`/auth/${isLogin ? "signup" : "login"}`);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <AddShoppingCartSharpIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopsy
          </Typography>
          {type === "auth" ? (
            <Button color="inherit" onClick={handleAuth}>
              {isLogin ? "Sign Up" : "Log In"}
            </Button>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
