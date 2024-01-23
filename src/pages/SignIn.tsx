import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../css/sign-in.css";
import { login } from "../services/auth.service";
import { NavigateFunction, useNavigate } from "react-router-dom";
import authHeader from "../services/auth-header";

const defaultTheme = createTheme();

export default function SignIn() {
  let navigate: NavigateFunction = useNavigate();

  const [role, setRole] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user_data = {
      email: data.get("email") as string,
      password: data.get("password") as string,
      role: role,
    };
    login(user_data.email, user_data.password, user_data.role).then(
      () => {
        authHeader();
        if (user_data.role === "user") {
          navigate("/");
          window.location.reload();
        } else {
          navigate("/dashboard");
          window.location.reload();
        }
      },
      (error): any => {
        console.log(error);
      }
    );
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="sign__in__page">
        <div className="sign__in__left__design"></div>
        <Container component="main" maxWidth="xs" className="sign__in">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <input
                type="radio"
                id="admin"
                value={"admin"}
                name="role"
                onClick={() => setRole("admin")}
              />
              <label htmlFor="admin">Admin</label>
              <input
                type="radio"
                id="user"
                value={"user"}
                name="role"
                onClick={() => setRole("user")}
              />
              <label htmlFor="user">User</label>
            </div>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="http://localhost:5173/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}
