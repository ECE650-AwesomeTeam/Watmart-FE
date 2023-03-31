import { LoadingButton } from "@mui/lab";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "mui-image";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import MD5 from "crypto-js/md5";
import { useNavigate } from "react-router-dom";
import "../css/AnimationBg.css"
import logo from "../assets/logo-no-background.png"
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const theme = createTheme();

const initialValues = {
    email: "",
    password: "",
    remember: false,
};

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, "Password must be more than 6 character length"),
    email: Yup.string()
        .email("Invalid email address")
});

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [loginFailed, setLoginFailed] = useState("");

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log("login");
            setLoading(true);
            try {
                let errorMsg = await login(values.email, MD5(values.password).toString())
                if(errorMsg) {
                    setLoading(false);
                    setLoginFailed(errorMsg)
                    setTimeout(() => {
                        setLoginFailed("")
                    }, 5000);
                } else {
                    navigate('/')
                }
            } catch (e) {
                setLoading(false);
            }
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div class="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                { loginFailed !== "" ? <Alert severity="error" onClose={() => {setLoginFailed("")}}>
                    <AlertTitle>Login Failed</AlertTitle>
                    {loginFailed}
                </Alert> : null}
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Welcome to Watmart
                    </Typography>
                    <Image
                        src={logo}
                        fit="contain"
                        duration={2000}
                        alt=""
                    />
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                        data-testid="textfield-01"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.email &&
                                Boolean(formik.errors.email)
                            }
                            helperText={
                                formik.touched.email && formik.errors.email
                            }
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            data-testid="textfield-02"
                            required
                            fullWidth
                            onChange={formik.handleChange}
                            error={
                                formik.touched.password &&
                                Boolean(formik.errors.password)
                            }
                            helperText={
                                formik.touched.password &&
                                formik.errors.password
                            }
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    onChange={formik.handleChange}
                                    value={formik.values.remember}
                                    checked={formik.values.remember}
                                />
                            }
                            className="checkbox"
                            label="Remember me"
                        />
                        <LoadingButton
                            type="submit"
                            data-testid="login-button"
                            fullWidth
                            loading={loading}
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </LoadingButton>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/" variant="body2">
                                    {"Back to main page"}
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Login;
