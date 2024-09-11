import React, { ChangeEvent, useState } from "react";
import "./Donate.css";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import ButtonGroup from "@mui/material/ButtonGroup";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Nav from "./Nav";
import DrawerAppBar from "../secondary_bar";

const VisuallyHiddenInput = styled("input")({
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  border: "0",
});

export default function Donate() {
  const [item, setItem] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const [dialogMessage, setDialogMessage] = React.useState<string>("");

  const handleOpenDialog = (message: string) => {
    setDialogMessage(message);
    setOpenDialog(true);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setItem(event.target.value);
  };

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setDesc(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const userId = localStorage.getItem("id"); // Make sure to handle null or undefined
      const response = await fetch(
        "http://localhost:5001/Users/Donation?item=" +
          item +
          "&desc=" +
          desc +
          "&time=" +
          time +
          "&userId=" +
          localStorage.getItem("id"),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        handleOpenDialog("Thank you for your donation");
        fetch(
          "http://localhost:5001/Users/Volunteer/mail?mail_body=Thank you for your kind donation we will let this know to all the ngos and let you know when someone approches&mail_sub=Donation recieved&userId=" +
            localStorage.getItem("id")
        );
        // Make sure to construct the second API call correctly
        // const emailResponse = await fetch(/* Your email API endpoint */, /* Your fetch options */);
      } else {
        handleOpenDialog("System error");
      }
    } catch (err) {
      console.error("Error:", err);
      handleOpenDialog("Try again later");
    }
  };

  return (
    <>
      <div className="user-donate-container">
        <Nav></Nav>

        <div className="user-donate-rows">
          <div className="user-donate-columns">
            <img
              src="https://www.educationworld.in/wp-content/uploads/2020/06/Rural-Children.jpg"
              alt="Image 1"
            ></img>
          </div>
          <div className="user-donate-columns">
            <h1>Open Hearts, Open Doors</h1>
            <h3>YOUR GATEWAY TO GENEROSITY</h3>
          </div>
          <div className="user-donate-columns">
            <img
              src="https://www.pia-insurance.com/wp-content/uploads/2023/07/AdobeStock_566580177-scaled.jpeg"
              alt="Image 3"
            ></img>
          </div>
        </div>

        <div className="marquee-container">
          <div className="marquee">
            <h2 className="marquee-text">
              #GiveHope
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #MakeADifference
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #GiveBack
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #DonateToday
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #ChangeLives
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #GenerosityMatters
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #ImpactfulGiving
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; #CommunitySupport
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </h2>
          </div>
        </div>

        <div className="donate-btns">
          <Button
            className="my-donation"
            variant="text"
            href="#donate-content-2"
            sx={{
              height: "50px",
              width: "200px",
              color: "rgb(15, 3, 70)",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            LEARN MORE
          </Button>
          <Divider orientation="vertical" flexItem />
          <Button
            className="my-donation"
            variant="text"
            href="#donate-form"
            sx={{
              height: "50px",
              width: "200px",
              color: "rgb(15, 3, 70)",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Donate Now
          </Button>
          <Divider orientation="vertical" flexItem />
          <Button
            className="my-donation"
            variant="text"
            href="/MyDonations"
            sx={{
              height: "50px",
              width: "200px",
              color: "rgb(15, 3, 70)",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            My Donations
          </Button>
        </div>

        <h1 className="donate-heading" id="donate-content-2">
          Welcoming Generosity for Change
        </h1>

        <div className="user-donate-2">
          <article className="donate-article">
            <h2>Power of Giving</h2>
            <h3>Why Your Donation Matters</h3>
            <p>
              You are a catalyst for change. Your donation is a lifeline for
              those in need. By giving, you're making a tangible difference in
              the world, providing hope and required support to individuals and
              communities facing challenges.
            </p>
          </article>

          <article className="donate-article">
            <h2>Transparency</h2>
            <h3>How We Utilize Your Donations</h3>
            <p>
              When you donate to CareWing, you can trust that your contribution
              is being used responsibly. We allocate all your donations
              strategically, ensuring that everything is maximized to make the
              greatest impact possible.
            </p>
          </article>

          <article className="donate-article">
            <h2>Transform Lives</h2>
            <h3>The Impact of Your Donation</h3>
            <p>
              We've witnessed the transformative impact of your donations on
              individuals and families, empowering them to thrive and reach
              their full potential. Together, we're making a difference and
              building a brighter future for all.
            </p>
          </article>
        </div>

        <div className="donate-form-flex">
          <Paper elevation={13} className="form-container" id="donate-form">
            <h1 className="donate-form-header">Donate Now!</h1>
            <TextField
              label="Item Name *"
              name="item"
              onChange={handleChange}
              className="form-textfield"
            />
            <TextField
              label="LifeTime *"
              name="time"
              value={time}
              onChange={handleChange2}
              className="form-textfield"
            />
            <TextField
              label="Brief Description"
              multiline
              rows={4}
              name="desc"
              value={desc}
              onChange={handleChange3}
              className="form-textfield"
            />
            <div className="button-container">
              <Button
                variant="contained"
                component="label"
                className="donate-button"
                sx={{
                  height: "50px", // Set custom height
                  width: "400px",
                  bgcolor: "rgb(15, 3, 70)", // Set the font color
                  fontSize: "18px", // Set the font size
                  marginTop: "50px",
                }}
              >
                Upload File
                <VisuallyHiddenInput type="file" />
              </Button>
              <span>{fileName}</span>{" "}
              {/* Display the uploaded file name here */}
              <Button
                variant="contained"
                onClick={handleSubmit}
                className="donate-button"
                sx={{
                  height: "50px", // Set custom height
                  width: "400px",
                  bgcolor: "rgb(15, 3, 70)", // Set the font color
                  fontSize: "18px", // Set the font size
                }}
              >
                Donate
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
          </Paper>

          <div className="flex-donate-2">
            <h1>Empower Change: Join Us in Making a Difference</h1>
            <h2>
              Join our movement and help us build a brighter, more equitable
              future for all!
            </h2>
            <h2>
              Your generosity fuels our mission to create lasting impact in
              communities worldwide.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
