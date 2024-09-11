import React, { useState } from "react";

import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import PostAddIcon from "@mui/icons-material/PostAdd";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import NgoNav from "./NgoNav";
import "./VolunteerOpportunityForm.css";

export default function VolunteerOpportunityForm() {
  const [subject, setSubject] = useState("");
  const [timings, setTimings] = useState("");
  const [volunteersNeeded, setVolunteersNeeded] = useState(0);
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const [dialogMessage, setDialogMessage] = React.useState<string>("");

  const handleOpenDialog = (message: string) => {
    setDialogMessage(message);
    setOpenDialog(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    (async () => {
      try {
        const response = await fetch(
          "http://localhost:5001/Ngos/RequestVolunteer",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              subject: subject,
              timings: timings,
              volunteersNeeded: volunteersNeeded,
            }),
          }
        );

        // console.log('out of response');
        // if (!response.ok) {
        //   throw new Error("Failed to save opportunity");
        // }
        const responseData = await response.json();
        console.log(responseData);
        handleOpenDialog("Opportunity is saved!");
      } catch (error) {
        console.error("Error sending opportunity:", error);
      }
    })();
  };

  // };

  return (
    <>
      <div className="opp-container">
        <div>
          <NgoNav></NgoNav>

          <div className="intro-1">
            <h1 className="h1-2">Building Bridges</h1>
            <h1>Connect with Volunteers Who Care</h1>

            <section className="intro-para">
              <p>
                You have the power to make a difference! As a vital part of our
                community, we invite you to share your volunteer requirements
                with us.
              </p>

              <p>
                Whether you're a non-profit organization, a community group, or
                an initiative working towards a cause, we're here to help
                amplify your message and connect you with dedicated volunteers
                ready to lend a hand.
              </p>
            </section>
          </div>

          <div className="opp-flex-container">
            <div className="opp-flex-container-1">
              <h1>Ready to find your perfect volunteer match? </h1>

              <div className="inline">
                <PostAddIcon sx={{ fontSize: 60 }} color="action" />
                <Typography variant="h4" id="text">
                  Start by crafting your volunteer post and sharing it with our
                  community today.
                </Typography>
              </div>

              <div className="inline">
                <AppRegistrationIcon sx={{ fontSize: 60 }} color="action" />
                <Typography variant="h4">
                  Share details about your organization's volunteer needs. Fill
                  in the subject, time commitments, and the number of volunteers
                  you need.
                </Typography>
              </div>
              <div className="inline">
                <VolunteerActivismIcon sx={{ fontSize: 60 }} color="action" />
                <Typography variant="h4">
                  Thank you for your commitment. Let's make the world a better
                  place!
                </Typography>
              </div>
            </div>

            <div className="form-container">
              <h2>Fill in your Volunteer Requirements</h2>
              <form>
                <TextField
                  required
                  id="subject"
                  label="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="text-field"
                />
                <br></br>
                <TextField
                  required
                  id="timings"
                  label="Hours"
                  value={timings}
                  onChange={(e) => setTimings(e.target.value)}
                  className="text-field"
                />
                <br></br>
                <TextField
                  label="Number of Volunteers Needed"
                  type="number"
                  id="volunteersNeeded"
                  required
                  value={volunteersNeeded}
                  className="text-field"
                  onChange={(e) =>
                    setVolunteersNeeded(parseInt(e.target.value))
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <br></br>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  className="btn"
                  sx={{
                    bgcolor: " rgb(15, 3, 70)", // Set the background color
                    fontSize: "14px",
                  }}
                >
                  Post Opportunity
                </Button>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
