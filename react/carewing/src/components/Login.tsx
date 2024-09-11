

import './Login.css';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import  { useRef, useState , ChangeEvent} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import UserHome from './UserHome';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import SimpleBackdrop from './Backdrop';
import { Background_Image } from './Background_image';
import Background_Donate from './Background-Donate';
import { Paper } from '@mui/material';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from 'react-redux';







export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alignment, setAlignment] = React.useState('web');
    const [openDialog, setOpenDialog] = React.useState<boolean>(false);
    const [dialogMessage, setDialogMessage] = React.useState<string>("");
  
    const handleOpenDialog = (message: string) => {
      setDialogMessage(message);
      setOpenDialog(true);
    };
  

    const handleChangebutton = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
      ) => {
        setAlignment(newAlignment);
      };
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
      };

      const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
      };

   
        


    const handleLogin = async() => {
        try {
        if(alignment === 'user') {
        const response = await fetch('http://localhost:5001/Users/Login?username=' + username + '&password=' + password);
        const userData = await response.json(); 
        localStorage.setItem("id", userData._id); 
        
        navigate('/UserHome');
        }else if (alignment === 'ngo') {
        const response = await fetch('http://localhost:5001/Ngos/Login?username=' + username + '&password=' + password);
        const ngoData = await response.json();
        
        localStorage.setItem("ngoId", ngoData._id); 
        navigate('/NgoHome');
        }
        
        } catch(err) {
            console.error('Error :', err);
            handleOpenDialog("Incorrect credentials");
        }
    }
   
      
   return(
    <div className="back">

    <div className="container_login">


    <Paper elevation={3} className='paper'>


    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChangebutton}
      aria-label="Platform"
      
    >
      <ToggleButton value="user">USER</ToggleButton>
      <ToggleButton value="ngo">NGO</ToggleButton>
     
    </ToggleButtonGroup>


    <Stack
          component="form"
          sx={{ width: '25ch' }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Username"
            hiddenLabel={false}
            id="filled-hidden-label-small"
            variant="filled"
            size="small"
            onChange={handleChange}
          />
          <TextField
            label="Password"
            hiddenLabel={false}
            id="filled-hidden-label-small"
            variant="filled"
            size="small"
            type='password'
            onChange={handlePassword}
          />


  </Stack>
    <Stack spacing={2} direction="row">
   
      <Button variant="contained" onClick={handleLogin}>Login</Button>
      <Dialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Notification"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    {dialogMessage}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => setOpenDialog(false)}
                    color="primary"
                    autoFocus
                  >
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
   
    </Stack>

    <div className="signup">
        <h5>Dont have an account? <a href="/SignUp">SignUp</a> now</h5>
    </div>

   </Paper>

    </div>
    </div>
   )
}

