import "./App.css";
import { Routes, Route } from "react-router";
import { Home, Login, Signup } from "@pages/index";
import { AppLayout, AuthLayout } from "@layouts/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
} 

export default App;
