import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const card = (
  <React.Fragment>
    <CardContent style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <TextField label="Email" />
      <TextField label="Password" />
    </CardContent>
    <CardActions>
      <Button size="medium" variant="contained" style={{ alignSelf: "center" }}>
        Login
      </Button>
    </CardActions>
  </React.Fragment>
);

export default function Login() {
  return (
    <Box sx={{ maxWidth: 375 }} style={{ width: "25%" }}>
      <Card variant="outlined" style={{ padding: "1rem" }}>
        {card}
      </Card>
    </Box>
  );
}
