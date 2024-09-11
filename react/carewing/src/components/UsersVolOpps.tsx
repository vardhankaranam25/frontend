import React, { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@mui/material";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Nav from "./Nav";
import './UsersVolOpps.css';

interface Opportunity {
  _id: string;
  subject: string;
  timings: string;
  volunteersNeeded: number;
}

const VolunteerOpportunityTable: React.FC = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const [dialogMessage, setDialogMessage] = React.useState<string>("");
  const handleOpenDialog = (message: string) => {
    setDialogMessage(message);
    setOpenDialog(true);
  };

  useEffect(() => {
    // Fetch data from MongoDB
    fetch("http://localhost:5001/NGORequirements")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Check the fetched data
        setOpportunities(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  //to show notification and update volunteer count
  const handleAccept = async (index : number) => {
    handleOpenDialog("Thank you for choosing to volunteer!");
    
    const updatedOpportunities = [...opportunities];
    updatedOpportunities[index].volunteersNeeded -= 1;
    setOpportunities(updatedOpportunities);

    //to change data in db
    (async () => {
      try {
        const response = await fetch("http://localhost:5001/Ngos/UpdateVolOpp", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            _id: updatedOpportunities[index]._id,
            subject: updatedOpportunities[index].subject,
            timings: updatedOpportunities[index].timings,
            volunteersNeeded: updatedOpportunities[index].volunteersNeeded,
          }),
        });
        
        const responseData = await response.json();
        console.log(responseData);
        //alert("Opportunity is saved!");
      } catch (error) {
        console.error("Error sending opportunity:", error);
      }
    })();
  }
  

  return (
    <>
      <Nav></Nav>

    <div className="vol-list-intro">
      <h1>Volunteer Opportunities Await!</h1>
      <h2>Join NGOs and Make a Difference</h2>
      <p>Are you ready to make a positive impact in your community and beyond? Joining Non-Governmental Organizations (NGOs) opens doors to fulfilling volunteer opportunities that empower you to contribute to meaningful causes.</p>
    </div>

      <TableContainer component={Paper} className="table-container-display" sx={{ textAlign: "center", padding: "50px"}}>
        <Table>
          <TableHead sx={{bgcolor: "lightgrey", fontWeight: "bold"}}>
            <TableRow className="table-row">
              <TableCell className="table-cell" sx={{ textAlign: "center" }}>Subject</TableCell>
              <TableCell className="table-cell" sx={{ textAlign: "center" }}>Hours</TableCell>
              <TableCell className="table-cell" sx={{ textAlign: "center" }}>Volunteers Needed</TableCell>
              <TableCell className="table-cell" sx={{ textAlign: "center" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {opportunities.map((opportunity, index) => (
              <TableRow key={opportunity._id} className="table-row">
                <TableCell className="table-cell" sx={{ textAlign: "center" }}>{opportunity.subject}</TableCell>
                <TableCell className="table-cell" sx={{ textAlign: "center" }}>{opportunity.timings}</TableCell>
                <TableCell className="table-cell" sx={{ textAlign: "center" }}>{opportunity.volunteersNeeded}</TableCell>
                <TableCell className="table-cell" sx={{ textAlign: "center" }}>
                  <Button
                    className="btn"
                    variant="contained"
                    sx={{
                      width: "100px", // Set custom width
                      height: "50px", // Set custom height
                      bgcolor: " rgb(15, 3, 70)", // Set the background color
                    }}
                    onClick={() => handleAccept(index)}
                  >
                    Sign Up
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
          <Button
            onClick={() => setOpenDialog(false)}
            color="primary"
            autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default VolunteerOpportunityTable;
