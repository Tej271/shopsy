import React, { useState, type ChangeEvent } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

type StringFields = "firstName" | "lastName" | "email" | "password";

type User = Record<StringFields, string>;

export default function SignUpCard() {
  const initial_state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState<User>(initial_state);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const obj = user;
    console.log(obj);
  };

  return (
    <Box sx={{ maxWidth: 475 }} style={{ margin: "auto" }}>
      <Card variant="outlined" style={{ padding: "1rem" }}>
        <CardContent style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            name="firstName"
            label="First Name"
            variant="outlined"
            type="text"
            value={user.firstName}
            onChange={handleChange}
          />
          <TextField
            name="lastName"
            label="Last Name"
            variant="outlined"
            type="text"
            value={user.lastName}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            value={user.email}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            value={user.password}
            onChange={handleChange}
          />
        </CardContent>
        <CardActions>
          <Button size="medium" variant="contained" onClick={handleSubmit}>
            Sign Up
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
