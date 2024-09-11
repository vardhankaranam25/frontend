import Paper from "@mui/material/Paper";
import NavNgo from "./NgoNav";
import { TextField, Button } from "@mui/material";
import "./NgoRaiseFund.css";
import React, { useState, ChangeEvent } from "react";
import { lime, purple } from "@mui/material/colors";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function NgoRaiseFund() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [amt, setAmt] = useState("");
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const [dialogMessage, setDialogMessage] = React.useState<string>("");

  const handleOpenDialog = (message: string) => {
    setDialogMessage(message);
    setOpenDialog(true);
  };

  const handleTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleDesc = (event: ChangeEvent<HTMLInputElement>) => {
    setDesc(event.target.value);
  };
  const handleAmt = (event: ChangeEvent<HTMLInputElement>) => {
    setAmt(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5001/Ngos/RaiseFund", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: localStorage.getItem("ngoId"),
          title: title,
          description: desc,
          target_amount: amt,
          current_amount: "0",
        }),
        // body: JSON.stringify({ note: title.current }), // Convert the note data into a JSON string
      });
      const message = await response.text();
      handleOpenDialog(message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <NavNgo></NavNgo>
      <div className="flex-box">
        <div className="fund-content-1">
          <h3 id="h3">UNITE FOR IMPACT WITH CAREWING</h3>
          <h1 id="h1">Kickstart Your Fundraising Campaign</h1>
          <p>
            With the power of community and compassion, your NGO can make a
            profound impact on the lives of those in need. Engage supporters,
            share your compelling mission, and inspire action toward a brighter
            future. Together, let's create positive change and pave the way for
            a better tomorrow.
          </p>
        </div>

        <div className="fund-content-2">
          <img src="https://assets.entrepreneur.com/content/3x2/2000/1673019342-GettyImages-1334389755.jpg"></img>
          <Button
            variant="contained"
            href="#section1"
            id="btn-1"
            sx={{
              bgcolor: " rgb(15, 3, 70)", // Set the background color to lime
              fontSize: "20px",
            }}
          >
            GET STARTED NOW
          </Button>
        </div>
      </div>

      <div className="container-fund" id="section1">
        <div className="container-fund-1">
          <h1 className="h1">Launch your Fundraising Journey</h1>

          <div className="title">
            <TextField
              required
              id="outlined-required"
              label="Title"
              className="mailbox"
              onChange={handleTitle}
            />
          </div>

          <div className="title">
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              className="mailbox"
              required
              onChange={handleDesc}
            />
          </div>

          <div className="title">
            <TextField
              required
              id="outlined-required"
              label="Target Amount"
              className="mailbox"
              onChange={handleAmt}
            />
          </div>

          <div>
            <Button
              variant="contained"
              id="btn-2"
              onClick={handleSubmit}
              sx={{
                bgcolor: " rgb(15, 3, 70)", // Set the background color
                fontSize: "14px",
              }}
            >
              SUBMIT
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
          </div>
        </div>

        <div className="container-fund-2">
          <div className="container-fund-text">
            <h2>Outline the Mission</h2>
            <p>
              Specify the specific goals and initiatives your fundraising
              campaign aims to support.
            </p>
            <p>
              Whether it's providing education to underprivileged children,
              protecting the environment, or aiding disaster relief efforts,
              outline the tangible outcomes you seek to achieve. Detail how each
              donation contributes to advancing your mission, fostering
              transparency and accountability.
            </p>
          </div>

          <div className="container-fund-text">
            <h2>Set Your Fundraising Goal</h2>
            <p>Determine the amount you aim to raise through your campaign.</p>
            <p>
              Consider the costs associated with your projects, programs, and
              operational expenses, ensuring that your fundraising goal aligns
              with the resources needed to fulfill your mission.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
