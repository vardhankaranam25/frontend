import React, { ChangeEvent, useEffect, useState } from "react";
import Nav from "./Nav";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Modal,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Description } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import './List.css';

interface Data {
  _id: string;
  username: String;
  user_id: String;
  course: string;
  userEmail: String;
  description: string;
  time: string;
  hours: string;
}

export default function MyVolunteer() {
  const [data, setData] = useState<Data[]>([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [currentItem, setCurrentItem] = useState("");
  const [currentDesc, setCurrentDesc] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const [dialogMessage, setDialogMessage] = React.useState<string>("");

  const handleOpenDialog = (message: string) => {
    setDialogMessage(message);
    setOpenDialog(true);
  };

  const handleOpen = (id: string) => {
    setId(id);
    setOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      fetch("http://localhost:5001/Users/DeleteVolunteer?id=" + id, {
        method: "DELETE",
      });
      handleOpenDialog("Deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = async () => {
    if (currentItem != " ") {
      const response = await fetch(
        "http://localhost:5001/Users/UpdateVolunteer",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id: id, course: currentItem }),
          // body: JSON.stringify({ note: title.current }), // Convert the note data into a JSON string
        }
      );
      const message = await response.text();
    }

    if (currentDesc != " ") {
      const response = await fetch(
        "http://localhost:5001/Users/UpdateVolunteer",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id: id, description: currentDesc }),
          // body: JSON.stringify({ note: title.current }), // Convert the note data into a JSON string
        }
      );
      const message = await response.text();
    }

    if (currentTime != " ") {
      const response = await fetch(
        "http://localhost:5001/Users/UpdateVolunteer",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id: id, hours: currentTime }),
          // body: JSON.stringify({ note: title.current }), // Convert the note data into a JSON string
        }
      );
      const message = await response.text();
    }
    setOpen(false);
  };

  // const handleItem = (event: ChangeEvent<HTMLInputElement>) => {
  //     setCurrentItem(event.target.value);
  //   }

  useEffect(() => {
    fetch(
      "http://localhost:5001/Users/GetUsersVolunteer?userId=" +
        localStorage.getItem("id")
    )
      .then((response) => response.json())
      .then((datas) => setData(datas))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Nav />

      <div className="list-container-display">
        <div className="list-container-intro">
          <h2>Manage Your Impact</h2>
        <h1>Volunteer Portal</h1>
        <p>Welcome to our Volunteer Portal, your hub for managing your impact and involvement with our organization. Here, you have the power to view, edit, and delete your volunteer commitments, ensuring flexibility and convenience in your journey with us. </p>
        <p>Thank you for your dedication to our cause. Together, we're making a difference, one volunteer opportunity at a time.</p>
        </div>

        <div className="display_area">
          {data.map((vol, index) => (
            <Accordion
              key={vol._id}
              defaultExpanded
              sx={{ margin: "0px", backgroundColor: '#f0f0f0' }}
              className="accordian"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <div className="card-flex">
                  <h3 className="item">{vol.course}</h3>
                </div>
              </AccordionSummary>
              <AccordionDetails className="sum">
                Your volunteered course of <b>{vol.course}</b> is still active.
                NGOs might need it!
              </AccordionDetails>

              <AccordionDetails className="sum">
                Description : <b>{vol.description}</b>
              </AccordionDetails>

              <AccordionDetails className="sum">
                Your Hours : <b>{vol.hours}</b>
              </AccordionDetails>

              <AccordionActions>
                <Button
                  className="btn"
                  variant="contained"
                  onClick={() => handleOpen(vol._id)}
                  sx={{
                    width: "100px",
                    height: "50px",
                    bgcolor: "rgb(15, 3, 70)",
                  }}
                >
                  Update
                </Button>

                <Button
                  className="btn"
                  variant="contained"
                  onClick={() => handleDelete(vol._id)}
                  sx={{
                    width: "100px",
                    height: "50px",
                    bgcolor: "rgb(15, 3, 70)",
                  }}
                >
                  Delete
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
              </AccordionActions>
            </Accordion>
          ))}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Volunteer Details
          </Typography>

          <TextField
            fullWidth
            label="Course"
            onChange={(e) => setCurrentItem(e.target.value)}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Description"
            onChange={(e) => setCurrentDesc(e.target.value)}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Hours/Days"
            onChange={(e) => setCurrentTime(e.target.value)}
            margin="normal"
          />

          <Button
            variant="contained"
            onClick={() => handleClose()} // You might want to implement actual update logic here
            sx={{ mt: 2 }}
          >
            Save Changes
          </Button>
        </Box>
      </Modal>
    </>
  );
}
