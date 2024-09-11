// import NavNgo from "./NgoNav"
// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';
// import { useState, useEffect } from "react";
// import './NgoGetVolunteers.css';


// interface Data {
//     _id: string;
//     course: string;
//     description: string;
//     username: string;
//     user_address: string;
//     postedDate: Date | string;
//     hours: string;
//   }
  

//   export const handleAccept = async() => {
//     try {
//       fetch('http://localhost:5001/Ngos/mail?userId=' + localStorage.getItem("ngoId") + "&mail_body=we will let this user know about his volunteering interest &mail_sub=volunteer request recieved");
//       fetch('http://localhost:5001/Users/Volunteer/mail?userId=' + localStorage.getItem("id") + "&mail_body= your volunteer has been accepted Thank You!! &mail_sub=volunteer accepted");
//     } catch(error) {
//      console.log(error);
//     }
//   }

// export default function NgoGetVolunteers() {

//     const [data, setData] = useState<Data[]>([]);


//     useEffect(() => {
//       fetch('http://localhost:5001/Ngos/GetVolunteers')
//         .then((response) => response.json())
//         .then((datas) => setData(datas))
//         .catch((error) => console.error("Error fetching data:", error));
//     }, []);
//     //alert(data[0].item);
//     return (
//       <>
//         <NavNgo></NavNgo>
  
//         <div className="lists-container-display">
//           <div className="display_area">
//             {data.map((vol, index) => (
//               <Accordion
                
//                 sx={{ marginBottom: "50px", bgcolor: "rgb(209, 214, 214)" }}
//                 className="accordian"
//               >
//                 <AccordionSummary
//                   expandIcon={<ExpandMoreIcon />}
//                   aria-controls="panel3-content"
//                   id="panel3-header"
//                 >
//                   <div className="card-flex">
//                     <h3 className="item">{vol.course}</h3>
//                     <h3 className="date"></h3>
//                   </div>
//                 </AccordionSummary>
//                 <div>
//                   <AccordionDetails className="sum">
//                      A course of {vol.course} is being offered for {vol.hours} hours
//                   </AccordionDetails>

//                   <AccordionDetails className="sum">
//                      Description : {vol.description}
//                   </AccordionDetails>
  
//                   <AccordionDetails className="donor">
//                     Volunteerd by {vol.username} | {vol.user_address}
//                   </AccordionDetails>
//                 </div>
  
//                 <AccordionActions>
//                   <Button
//                     className="btn"
//                     variant="contained"
//                     sx={{
//                       width: "100px", // Set custom width
//                       height: "50px", // Set custom height
//                       bgcolor: " rgb(15, 3, 70)", // Set the background color 
//                     }}
//                     onClick={handleAccept}
//                   >
//                     Accept
//                   </Button>
//                 </AccordionActions>
//               </Accordion>
//             ))}
//           </div>
//         </div>
//       </>
//     );
// }
import React, { useState, useEffect } from 'react';
import NavNgo from "./NgoNav";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import './NgoGetVolunteers.css';

interface Data {
    _id: string;
    course: string;
    description: string;
    username: string;
    user_address: string;
    postedDate: Date | string;
    hours: string;
}

export default function NgoGetVolunteers() {
    const [data, setData] = useState<Data[]>([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [dialogMessage, setDialogMessage] = useState("");

    const handleAccept = async () => {
        try {
            await fetch('http://localhost:5001/Ngos/mail?userId=' + localStorage.getItem("ngoId") + "&mail_body=we will let this user know about his volunteering interest &mail_sub=volunteer request received");
            await fetch('http://localhost:5001/Users/Volunteer/mail?userId=' + localStorage.getItem("id") + "&mail_body= your volunteer has been accepted. Thank You! &mail_sub=volunteer accepted");
            setDialogMessage("Volunteer request processed successfully!");
            setOpenDialog(true);
        } catch (error) {
            console.log(error);
            setDialogMessage("Failed to process volunteer request.");
            setOpenDialog(true);
        }
    };
useEffect(() => {
    fetch('http://localhost:5001/Ngos/GetVolunteers')
        .then((response) => response.json())
        .then((datas) => setData(datas))
        .catch((error) => console.error("Error fetching data:", error));
}, []);

return (
    <>
    <NavNgo></NavNgo>

    <div className="container-display-full">
      <div className="donate-container-intro">
        <h2>PASSION MEETS PURPOSE</h2>
        <h1>Welcome to Volunteer Nexus!</h1>
        <p>
          With detailed profiles showcasing volunteers' expertise, preferred
          subjects, and availability, you can efficiently find the right
          individuals to contribute to their causes. You have the freedom to
          select volunteers perfectly suited to their missions.
        </p>
        <p>
          <strong>
            Simply select your preferred volunteers, and we'll take care of
            contacting them on your behalf!
          </strong>
          </p>
      </div>
    </div>

        <div className="lists-container-display">
                {data.map((vol, index) => (
                    <Accordion
                        key={vol._id}
                        sx={{ marginBottom: "50px", bgcolor: "rgb(209, 214, 214)" }}
                        className="accordion"
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id={`panel3-header-${index}`}
                        >
                            <div className="card-flex">
                                <h3 className="item">{vol.course}</h3>
                            </div>
                        </AccordionSummary>
                        <div>
                            <AccordionDetails className="sum">
                                A course of {vol.course} is being offered for {vol.hours} hours
                            </AccordionDetails>

                            <AccordionDetails className="sum">
                                Description: {vol.description}
                            </AccordionDetails>

                            {/* <AccordionDetails className="donor">
                                Volunteered by {vol.username} | {vol.user_address}
                            </AccordionDetails> */}
                        </div>

                        <AccordionActions>
                            <Button
                                className="btn"
                                variant="contained"
                                sx={{ width: "100px", height: "50px", bgcolor: "rgb(15, 3, 70)" }}
                                onClick={handleAccept}
                            >
                                Accept
                            </Button>
                        </AccordionActions>
                    </Accordion>
                ))}
            </div>
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
    </>
);
}
