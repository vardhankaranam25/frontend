import React, { ChangeEvent, useState } from 'react';
// import './Donate.css';
import './Volunteer_User.css'
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Nav from './Nav';
import DrawerAppBar from '../secondary_bar';
import { FormControlLabel, Radio, RadioGroup, FormControl, FormLabel } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const VisuallyHiddenInput = styled('input')({
    position: 'absolute',
    width: '1px',
    height: '1px',
    margin: '-1px',
    padding: '0',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    border: '0',
  });

export default function Donate() {
  //   const [course, setCourse] = useState<string>('');
  //   const [desc, setDesc] = useState<string>('');
  //   const [time, setTime] = useState<string>('');
  //  // const [fileName, setFileName] = useState<string>('');

  //   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //       setCourse(event.target.value);
  //     };

  //     const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
  //       setTime(event.target.value);
  //     };

  //     const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
  //       setDesc(event.target.value);
  //     };

      // const [firstName, setFirstName] = useState('');
      // const [lastName, setLastName] = useState('');
      // const [email, setEmail] = useState('');
      // const [phone, setPhone] = useState('');
      // const [gender, setGender] = useState('');
      // const [state, setState] = useState('');
      // const [city, setCity] = useState('');
      // const [pincode, setPincode] = useState('');
      // const [course, setCourse] = useState('');
      // const [months, setMonths] = useState('');
      // const [desc, setDesc] = useState('');
      // const [isNotificationVisible, setIsNotificationVisible] = useState(false);
      // const [notificationMessage, setNotificationMessage] = useState('');
      const navigate = useNavigate();
         const [course, setCourse] = useState<string>('');
         const [desc, setDesc] = useState<string>('');
      const [months, setMonths] = useState('');
      const [openDialog, setOpenDialog] = React.useState<boolean>(false);
         const [dialogMessage, setDialogMessage] = React.useState<string>('');
         const handleOpenDialog = (message: string) => {
          setDialogMessage(message);
          setOpenDialog(true);
        };

      

    


      
  
      // const handleChangeFirstName = (event: ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value);
      // const handleChangeLastName = (event: ChangeEvent<HTMLInputElement>) => setLastName(event.target.value);
      // const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
      // const handleChangePhone = (event: ChangeEvent<HTMLInputElement>) => setPhone(event.target.value);
      // const handleChangeGender = (event: ChangeEvent<HTMLInputElement>) => setGender(event.target.value);
      // const handleChangeState = (event: ChangeEvent<HTMLInputElement>) => setState(event.target.value);
      // const handleChangeCity = (event: ChangeEvent<HTMLInputElement>) => setCity(event.target.value);
      // const handleChangePincode = (event: ChangeEvent<HTMLInputElement>) => setPincode(event.target.value);
      const handleChangeCourse = (event: ChangeEvent<HTMLInputElement>) => setCourse(event.target.value);
      const handleChangeMonths = (event: ChangeEvent<HTMLInputElement>) => setMonths(event.target.value);
      const handleChangeDesc = (event: ChangeEvent<HTMLInputElement>) => setDesc(event.target.value);

    
      
      
      
     

    const handleSubmit = async () => {
        try {
            const userId = localStorage.getItem("id"); // Make sure to handle null or undefined
            const response = await fetch('http://localhost:5001/Users/Volunteer?course=' + course + '&desc=' + desc + '&hours=' + months + '&userId=' + localStorage.getItem("id"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                
            });
            

            if (response.status === 200) {
              handleOpenDialog("Thank you for your volunteering");

               fetch("http://localhost:5001/Users/Volunteer/mail?mail_body=Thank you for volunteering we will send your kind help to all the ngos and let you know when someone approches&mail_sub=Volunteering recieved&userId=" + localStorage.getItem("id"));
                // const emailResponse = await fetch(/* Your email API endpoint */, /* Your fetch options */);
            } else {
              handleOpenDialog("System error");
            }
        } catch (err) {
            console.error('Error:', err);
            handleOpenDialog("Try again later");
        }
    };
 
    

    return (
        <>
        {/* <div className="nav">
            <div className="items">
                <a href="/MyVolunteering">MyVolunteering</a>
            </div>
        </div> */}
        <div className="container_donate">
        <div className="user-donate-row">
          {/* <div className="user-donate-column">
            <img    className ="vol-image"
              src="https://www.hiresafe.com/wp-content/uploads/2015/03/iStock_000030710142_Large.jpg"
              alt="Image 1"
            ></img>
          </div> */}
          <div className="user-donate-column text-content">
      <h1>Volunteer Today</h1>
      <h2>Where Passion Meets Purpose</h2>
      <p>Join a community where compassion meets action, and your willingness to help is the cornerstone of our collective mission. Dive into a world of opportunities where your time and talents illuminate the lives of others.</p>
      <p>Become the change you wish to see. <strong>Volunteer today</strong> and be a part of our journey towards a better tomorrow.</p>
      <div><Button className="volunteer-button" variant="text"             href="#display1abcdefgh"

            sx={{
              height: "50px", // Set custom height
              width: "200px",
              color: "rgb(15, 3, 70)", // Set the font color
              fontSize: "18px", // Set the font size
              fontWeight: "bold"
            }}>Go Ahead </Button>
            <Button className="volunteer-button" variant="text"             href="/MyVolunteering"

sx={{
  height: "50px", // Set custom height
  width: "200px",
  color: "rgb(15, 3, 70)", // Set the font color
  fontSize: "18px", // Set the font size
  fontWeight: "bold"
}}>My Volunteering </Button>
    </div>
    
        </div>
        <div className="user-donate-column">
            <img    className ="vol-image"
              src="https://www.hiresafe.com/wp-content/uploads/2015/03/iStock_000030710142_Large.jpg"
              alt="Image 1"
            ></img>
          </div>
        </div>
        

        
            
        
            <Nav></Nav>
            {/* <div className="myvolunteer">
              <Button className="myvol" href="/MyVolunteering">My Volunteering</Button>
            // <a href="/MyVolunteering">My Volunteering</a>
            </div> */}

            <h2>
  <span className="bannerVol">Why Volunteer?</span>
</h2>

<div className = "flipping">
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <h3>Educational Outreach</h3> 
    </div>
    <div className="flip-card-back">
      <p>Share your knowledge and teach skills to empower the next generation.</p> 
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <h3>Local Engagement</h3> 
    </div>
    <div className="flip-card-back">
      <p>Connect with nearby NGOs to make a tangible impact in children's lives.</p> 
    </div>
  </div>
</div>
<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
    <h3>Conscious Giving</h3> 
    </div>
    <div className="flip-card-back">
      <p>Donate pre-loved items to those in need, fostering a cycle of kindness.</p> 
    </div>
  </div>
</div>
</div>


            

        
            
            
            {/* <Paper elevation={13} className="form-container">
                <TextField
                    label="Course*"
                    name="item"
                    onChange={handleChange}
                    className="textfield"
                />
                <TextField
                    label="Brief Description"
                    multiline
                    rows={4}
                    name="desc"
                    value={desc}
                    onChange={handleChange3}
                    className="textfield"
                />

                  <TextField
                    label="Hours/Days*"
                    name="time"
                    value={time}
                    onChange={handleChange2}
                    className="textfield"
                />
                

                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        className="donate-button"
                    >
                        Volunteer
                    </Button>
                
            </Paper> */}
            <Paper elevation={13}  id= 'display1abcdefgh' className='display12'>
                  <h1> Interested to Volunteer?</h1>
                  {/* <p>Personal Information</p> */}
                    {/* <TextField required label="First Name" className='mailbox' onChange={handleChangeFirstName} />
                    <TextField required label="Last Name" className='mailbox' onChange={handleChangeLastName} />
                    <TextField required type="email" label="Email Address" className='mailbox' onChange={handleChangeEmail} />
                    <TextField required label="Phone Number" className='mailbox' onChange={handleChangePhone} /> */}
                    {/* <p>Where do you reside?</p> */}

                    {/* <TextField required label="State" className='mailbox' onChange={handleChangeState} />
                    <TextField required label="City" className='mailbox' onChange={handleChangeCity} />
                    <TextField required label="Pincode" className='mailbox' onChange={handleChangePincode} /> */}
                    {/* <p>How would you like to contribute?</p> */}
                    <TextField required label="Course" className='mailbox' onChange={handleChangeCourse} />
                    <TextField required label="Brief Description" multiline rows={4} className='mailbox' onChange={handleChangeDesc} />
                    <TextField required label="Hours" className='mailbox' onChange={handleChangeMonths} />

                    <Button variant="outlined" onClick={handleSubmit}>Volunteer</Button>
                    <Dialog
    open={openDialog}
    onClose={() => setOpenDialog(false)}
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
        <Button onClick={() => setOpenDialog(false)} color="primary" autoFocus>
            Close
        </Button>
    </DialogActions>
</Dialog>
                </Paper>
        </div>

        </>
    );
}

