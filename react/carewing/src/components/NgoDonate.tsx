// import NavNgo from "./NgoNav";
// import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionActions from "@mui/material/AccordionActions";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Button from "@mui/material/Button";
// import { useState, useEffect } from "react";
// import "./NgoDonate.css";

// interface Data {
//   _id: string;
//   item: string;
//   description: string,
//   username: string;
//   user_email: string;
//   date: string;
// }


// export const handleAccept = async() => {
//   try {
//     fetch('http://localhost:5001/Ngos/mail?userId=' + localStorage.getItem("ngoId") + "&mail_body=we will let this user know about your interest please send anyone from your side to pick this up&mail_sub=donation request recieved");
//     fetch('http://localhost:5001/Users/Volunteer/mail?userId=' + localStorage.getItem("id") + "&mail_body= your donation has been accepted someone from them will come and pick it up from you Thank You!! &mail_sub=donation accepted");
//   } catch(error) {
//    console.log(error);
//   }
// }
// export default function NgoDonate() {
//   const [data, setData] = useState<Data[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:5001/Ngos/Donation")
//       .then((response) => response.json())
//       .then((datas) => setData(datas))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);
//   //alert(data[0].item);
//   return (
//     <>
//       <NavNgo></NavNgo>

//       <div className="container-display-full">
//         <div className="display_area">
//           {data.map((vol, index) => (
//             <Accordion
              
//               sx={{ marginBottom: "50px", bgcolor: " rgb(182, 233, 216)"}}
//               className="accordian"
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel3-content"
//                 id="panel3-header"
//               >
//                 <div className="card-flex">
//                   <h3 className="item">{vol.item}</h3>
//                   <h3 className="date">{vol.date}</h3>
//                 </div>
//               </AccordionSummary>
//               <div>
//                 <AccordionDetails className="sum">
//                   Exciting news! You're now eligible to get {vol.item}. Seize
//                   the opportunity before it's gone! Act fast to secure this
//                   valuable resource for your organization. Thank you for your
//                   support in our mission to make a difference!
//                 </AccordionDetails>

//                 <AccordionDetails className="sum">
//                   Description : {vol.description}
//                 </AccordionDetails>

//                 <AccordionDetails className="donor">
//                   Donated by {vol.username} | {vol.user_email}
//                 </AccordionDetails>
//               </div>

//               <AccordionActions>
//                 <Button
//                   className="btn"
//                   variant="contained"
//                   sx={{
//                     width: "100px", // Set custom width
//                     height: "50px", // Set custom height
//                     bgcolor: " rgb(15, 3, 70)", // Set the background color 
//                   }}
//                   onClick={handleAccept}
//                 >
//                   Accept
//                 </Button>
//               </AccordionActions>
//             </Accordion>
//           ))}
//         </div>
//       </div>
//     </>
//   );
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
import "./NgoDonate.css";

interface Data {
  _id: string;
  item: string;
  description: string;
  username: string;
  user_email: string;
  date: string;
}

export default function NgoDonate() {
  const [data, setData] = useState<Data[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");

  const handleAccept = async () => {
    try {
      await fetch('http://localhost:5001/Ngos/mail?userId=' + localStorage.getItem("ngoId") + "&mail_body=we will let this user know about your interest please send anyone from your side to pick this up&mail_sub=donation request received");
      await fetch('http://localhost:5001/Users/Volunteer/mail?userId=' + localStorage.getItem("id") + "&mail_body= your donation has been accepted someone from them will come and pick it up from you Thank You!! &mail_sub=donation accepted");
      setDialogMessage("Donation accepted successfully!");
      setOpenDialog(true);
    } catch (error) {
      console.log(error);
      setDialogMessage("Failed to accept donation.");
      setOpenDialog(true);
    }
  };

  useEffect(() => {
    fetch("http://localhost:5001/Ngos/Donation")
      .then((response) => response.json())
      .then((datas) => setData(datas))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <NavNgo></NavNgo>

        <div className="vol-container-box">
        <div className="vol-container-intro">
          <h2>CareWing's Flexible Donation Hub</h2>
          <h1>Your Cause, Your Choice.</h1>
          <p><strong>
            With detailed profiles showcasing volunteers' expertise, preferred
            subjects, and availability, you can efficiently find the right
            individuals to contribute to their causes. You have the freedom to
            select volunteers perfectly suited to their missions. </strong>
          </p>
        </div>
      </div>

        <div className="donate-display-area">
          {data.map((vol, index) => (
            <Accordion
              key={vol._id}
              sx={{ marginBottom: "50px", bgcolor: "rgb(182, 233, 216)" }}
              className="accordion-donate"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id={`panel3-header-${index}`}
              >
                <div className="card-flex">
                  <h3 className="item">{vol.item}</h3>
                  <h3 className="date">{vol.date}</h3>
                </div>
              </AccordionSummary>
              <div>
                <AccordionDetails className="sum">
                  Exciting news! You're now eligible to get {vol.item}. Seize
                  the opportunity before it's gone! Act fast to secure this
                  valuable resource for your organization. Thank you for your
                  support in our mission to make a difference!
                </AccordionDetails>

                <AccordionDetails className="sum">
                  Description: {vol.description}
                </AccordionDetails>

                <AccordionDetails className="donor">
                  Donated by {vol.username} | {vol.user_email}
                </AccordionDetails>
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

