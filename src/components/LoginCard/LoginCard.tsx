import React, { useState, type ChangeEvent } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import "./styles.css";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleField = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = () => {
    const obj = {
      email,
      password,
    };

    console.log(obj);
  };

  return (
    <Box sx={{ maxWidth: 475 }} style={{ margin: "auto" }}>
      <Card variant="outlined" style={{ padding: "1rem" }}>
        <CardContent className="content">
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={handleField}
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handleField}
          />
        </CardContent>
        <CardActions>
          <Button size="medium" variant="contained" onClick={handleSubmit}>
            Login
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
