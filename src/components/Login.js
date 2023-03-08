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

const theme = createTheme();

const initialValues = {
    email: "",
    password: "",
    remember: false,
};

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, "Password must be more than 6 character length")
        .required("Password is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
});

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log("login");
            setLoading(true);
            try {
                await login(values.email, MD5(values.password).toString());
                navigate('/')
            } catch (e) {
                setLoading(false);
            }
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
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
                        src="/logo/png/logo-color.png"
                        fit="fill"
                        duration={800}
                        alt=""
                    />
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
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
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        />
                        <LoadingButton
                            type="submit"
                            fullWidth
                            loading={loading}
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </LoadingButton>
                        <Grid container>
                            <Grid item xs>
                                {/*<Link href="#" variant="body2">*/}
                                {/*    Forgot password?*/}
                                {/*</Link>*/}
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
