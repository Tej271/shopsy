import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useForm, type SubmitHandler } from "react-hook-form";

type StringFields = "firstName" | "lastName" | "email" | "password";

type Inputs = Record<StringFields, string>;

export default function SignUpCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const renderInput = (label: string, field: StringFields) => {
    return (
      <TextField
        label={label}
        variant="outlined"
        type="text"
        {...register(field, { required: `${label} is required` })}
        error={!!errors[field]}
        helperText={errors[field]?.message}
      />
    );
  };

  return (
    <Box sx={{ maxWidth: 475 }} style={{ margin: "auto" }}>
      <Card variant="outlined" style={{ padding: "1rem" }}>
        <CardContent style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {renderInput("First Name", "firstName")}
            {renderInput("Last Name", "lastName")}
            {renderInput("Email", "email")}
            {renderInput("Password", "password")}
            <Button size="medium" variant="contained" type="submit">
              Sign Up
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
