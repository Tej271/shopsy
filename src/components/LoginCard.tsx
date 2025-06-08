import React, {useState, type ChangeEvent} from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

export default function LoginCard() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = () => {
        const obj = {
            email,
            password
        }

        console.log(obj);
    }

  return (
    <Box sx={{ maxWidth: 475 }} style={{ margin: "auto" }}>
      <Card variant="outlined" style={{ padding: "1rem" }}>
        <CardContent style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField label="Email" variant="outlined" type="email" value={email} onChange={handleEmail} />
          <TextField label="Password" variant="outlined" type="password" value={password} onChange={handlePassword} />
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
