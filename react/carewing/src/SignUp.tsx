
import React, { useState, MouseEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import './components/SignUp.css';
import BackgroundWhite from './components/BackgroundWhite';
import { Link } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();
    const [alignment, setAlignment] = React.useState<string>('user');
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const [mail, setMail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [confirmPassword, setConfirmPassword] = React.useState<string>('');
    const [username, setUsername] = React.useState<string>('');
    const [address, setAddress] = React.useState<string>('');
    const [zip, setZip] = React.useState<string>('');
    const [openDialog, setOpenDialog] = React.useState<boolean>(false);
    const [dialogMessage, setDialogMessage] = React.useState<string>('');
    const [shouldRedirect, setShouldRedirect] = React.useState<boolean>(false);

    const handleOpenDialog = (message: string, redirect: boolean = false) => {
        setDialogMessage(message);
        setShouldRedirect(redirect);
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
        if (shouldRedirect) {
            navigate('/login');
        }
    };

    const handleClickShowPassword = () => setShowPassword(prev => !prev);
    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => event.preventDefault();

    const handleChangeButton = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    const handleSubmit = async () => {
        if (!mail.includes('@')) {
            handleOpenDialog('Enter a valid email');
            return;
        }

        if (password !== confirmPassword) {
            handleOpenDialog('Password and confirm password do not match');
            return;
        }

        if (password.length < 8) {
            handleOpenDialog('Password should be at least 8 characters');
            return;
        }

        if (!username || !address || !zip) {
            handleOpenDialog('Enter all required fields');
            return;
        }

        const endpoint = alignment === 'user' ? 'Users/SignUp' : 'Ngos/SignUp';
        const body = JSON.stringify({
            [`${alignment}_email`]: mail,
            name: username,
            password,
            address,
            zip
        });

        try {
            const response = await fetch(`http://localhost:5001/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body
            });
            const message = await response.text();
            if (message === '{}') {
                handleOpenDialog('A user already exists with that email');
            } else {
                handleOpenDialog('Successfully registered', true);
            }
        } catch (error) {
            console.error(error);
            handleOpenDialog('An error occurred during registration');
        }
    };
    return (
        <>
            <BackgroundWhite />
            <div className="container_box">
                <Paper className="card" elevation={5}>
                    <div className="toggle">
                        <ToggleButtonGroup
                            color="primary"
                            value={alignment}
                            exclusive
                            onChange={handleChangeButton}
                            aria-label="Platform"
                        >
                            <ToggleButton value="user" className='togbox'>USER</ToggleButton>
                            <ToggleButton value="ngo" className='togbox'>NGO</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                    <div className="email">
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            className='mailbox'
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setMail(e.target.value)}
                        />
                    </div>
                    <div className="username">
                        <TextField
                            required
                            id="outlined-required"
                            label="Username"
                            className='mailbox'
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="password">
                        <FormControl variant="outlined" className='passbox'>
                            <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                required
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </div>
                    <div className="confirmpassword">
                        <FormControl variant="outlined" className='mailbox'>
                            <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password*</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-confirm-password"
                                required
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Confirm Password"
                            />
                        </FormControl>
                    </div>
                    <div className="address">
                        <TextField
                            id="outlined-multiline-static"
                            label="Address"
                            multiline
                            rows={4}
                            className='mailbox'
                            required
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className="zip">
                        <TextField
                            required
                            id="outlined-required"
                            label="Zip-Code"
                            className='zipbox'
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setZip(e.target.value)}
                        />
                    </div>
                    <div className="submit">
                        <Button variant="outlined" onClick={handleSubmit}>Sign Up</Button>
                    </div>
                    <div className="login-link">
                        Have an account? <Link to="/login">Login</Link>
                    </div>
                </Paper>
            </div>
            <Dialog
                open={openDialog}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Notification"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {dialogMessage}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
