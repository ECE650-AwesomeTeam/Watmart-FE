import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Image from 'mui-image';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import moment from 'moment'
import MD5 from "crypto-js/md5";
import dayjs from 'dayjs';
import logo from '../assets/logo-no-background.png'
import "../css/AnimationBg.css"


const theme = createTheme();

const initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    birthday: "",
    rePassword: ""
};

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, "Password must be more than 6 character length")
        .required("Password is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    firstName: Yup.string()
        .required("Firstname is required"),
    lastName: Yup.string()
        .required("lastname is required"),
    rePassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match'),
    birthday: Yup.string().required("Birthday is required.")
});

function Signup() {
    const { register } = useAuth()
    
    const [dob, setDob] = React.useState(dayjs(new Date()));
    useEffect(() => {
        formik.values.birthday = moment(new Date(dob)).format("YYYY-MM-DD");
    })

    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            console.log("signup");
            try {
                console.log(values)
                await register(values.email, values.firstName, values.lastName, MD5(values.password).toString(), values.birthday)
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
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid item xs={7} >
                    <Box sx={{
                        my: 8,
                        mx: 4,
                        p: 30,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Typography component="h1" variant="h4">
                            Sign up for Watmart!
                        </Typography>
                        <Image src={logo} fit="contain" duration={2000} alt="" height="60%" width="60%"/>
                    </Box>
                </Grid>
                <Grid item xs={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            <form onSubmit={formik.handleSubmit}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="studentId"
                                    label="Student ID"
                                    name="studentId"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    name="firstName"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                    helperText={formik.touched.firstName && formik.errors.firstName}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                    helperText={formik.touched.lastName && formik.errors.lastName}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="rePassword"
                                    label="Re-enter Password"
                                    type="password"
                                    id="rePassword"
                                    value={formik.values.rePassword}
                                    onChange={formik.handleChange}
                                    error={formik.touched.rePassword && Boolean(formik.errors.rePassword)}
                                    helperText={formik.touched.rePassword && formik.errors.rePassword}
                                />
                                <Grid container spacing={2}>
                                    <Grid container item xs={6} direction="column" >
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            type="tel"
                                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                            id="phoneNumber"
                                            label="Phone Number"
                                            name="phoneNumber"
                                        />
                                    </Grid>
                                    <Grid container item xs={6} direction="column" >
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                defaultValue={dayjs(new Date())}
                                                label="Date of Birth"
                                                margin="normal"
                                                required
                                                fullWidth
                                                renderInput={(params) => <TextField {...params} />}
                                                value={dob}
                                                onChange={setDob}
                                                error={formik.touched.birthday && Boolean(formik.errors.birthday)}
                                                helperText={formik.touched.birthday && formik.errors.birthday}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                </Grid>
                                <FormControlLabel
                                    control={<Checkbox value="accept" color="primary" />}
                                    label="I have read and accept the terms and conditions"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign up
                                </Button>
                            </form>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/" variant="body2">
                                        {"Back to main page"}
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        {"Already have an account? Login"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Signup
