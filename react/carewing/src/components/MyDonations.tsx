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
  item: string;
  user_email: String;
  description: string;
  time: string;
  lifetime: string;
}

export default function MyDonations() {
  const [data, setData] = useState<Data[]>([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [currentItem, setCurrentItem] = useState("");
  const [currentDesc, setCurrentDesc] = useState("");
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
      fetch("http://localhost:5001/Users/DeleteDonation?id=" + id, {
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
        "http://localhost:5001/Users/UpdateDonation",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id: id, lifetime: currentItem }),
          // body: JSON.stringify({ note: title.current }), // Convert the note data into a JSON string
        }
      );
      const message = await response.text();
    }

    if (currentDesc != " ") {
      const response = await fetch(
        "http://localhost:5001/Users/UpdateDonation",
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
    setOpen(false);
  };

  // const handleItem = (event: ChangeEvent<HTMLInputElement>) => {
  //     setCurrentItem(event.target.value);
  //   }

  useEffect(() => {
    fetch(
      "http://localhost:5001/Users/GetUsersDonations?userId=" +
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
          <h1>Tracking Your Generosity</h1>
          <p>Welcome to our donations page, where your kindness and support shine brightly. Here, you can see a comprehensive overview of all the contributions you've made, each a testament to your generosity and commitment to making a difference. </p>
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
                  <h3 className="item">{vol.item}</h3>
                </div>
              </AccordionSummary>
              <AccordionDetails className="sum">
                CareWing received your humble donation of <b>{vol.item}</b>! We
                thank you for your contribution!
              </AccordionDetails>

              <AccordionDetails className="sum">
                Description : <b>{vol.description}</b>
              </AccordionDetails>

              <AccordionDetails className="sum">
                LifeTime : <b>{vol.lifetime}</b>
              </AccordionDetails>

              <AccordionDetails className="donor">
                Donated by {vol.username} | {vol.user_email}
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
            Update Donation Details
          </Typography>

          <TextField
            fullWidth
            label="LifeTime"
            onChange={(e) => setCurrentItem(e.target.value)}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Description"
            onChange={(e) => setCurrentDesc(e.target.value)}
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
