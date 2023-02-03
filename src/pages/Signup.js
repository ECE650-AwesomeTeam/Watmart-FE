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
import dayjs, { Dayjs } from 'dayjs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { margin } from '@mui/system';


const theme = createTheme();

function Signup() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO
    };


    const [dob, setDob] = React.useState(null);

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid item xs={6} >
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
                        <Image src="/logo/png/logo-no-background.png" fit="contain" duration={800} alt="" />
                    </Box>
                </Grid>
                <Grid item xs={6} component={Paper} elevation={6} square>
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
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                                id="userName"
                                label="User Name"
                                name="userName"
                            />
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
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="rePassword"
                                label="Re-enter Password"
                                type="password"
                                id="rePassword"
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
                                            label="Date of Birth"
                                            margin="normal"
                                            required
                                            fullWidth
                                            value={dob}
                                            onChange={setDob}
                                            renderInput={(params) => <TextField {...params} />}
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
                            <Grid container>
                                <Grid item xs>
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
