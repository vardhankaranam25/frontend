import NavNgo from "./NgoNav";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "./Fund.css";
import Nav from "./Nav";

interface Data {
  _id: string;
  ngo: string;
  title: string;
  description: string;
  target_amount: string;
  current_amount: string;
}

export default function Fund() {
  const [data, setData] = useState<Data[]>([]);
  const [open, setOpen] = React.useState(false);
  const [amt, setAmt] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAmt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmt(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePayment = async (ngo: string) => {
    try {
      const response = await fetch("http://localhost:5001/Users/Payment", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: localStorage.getItem("id"),
          amount: amt,
          ngo: ngo,
        }),
        // body: JSON.stringify({ note: title.current }), // Convert the note data into a JSON string
      });
      fetch(
        "http://localhost:5001/Users/Volunteer/mail?mail_body=Thank you for your step towards a cause we have recieved your fund and will be forwarded to the ngo &mail_sub=Payment recieved&userId=" +
          localStorage.getItem("id")
      );
      // Make sure to construct the second API call correctly
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch("http://localhost:5001/Users/Fund")
      .then((response) => response.json())
      .then((datas) => setData(datas))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  //alert(data[0].item);
  return (
    <>
      <Nav></Nav>

      <div className="fund-container-display">
        <div className="fund-intro">
          <h1>DONATE TODAY. IMPACT TOMORROW.</h1>
          <h3>Explore & Support: Donate to Fuel Impactful Campaigns</h3>
          <div className="fund-intro-box">
          <p>
            Explore our causes and support the initiatives that resonate with
            you, knowing that your generosity creates lasting effects in our
            communities. Join us in making a difference, one donation at a time.
          </p>
          </div>
        </div>

        <div className="fund-display-area">
          {data.map((vol, index) => (
            <Accordion
              className="campaign-box"
              defaultExpanded
              sx={{ margin: "0px" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <div>
                  <div className="item">{vol.title}</div>

                  <div className="date">{vol.ngo}</div>
                </div>
              </AccordionSummary>

              <div className="sum">
                <AccordionDetails>{vol.description}</AccordionDetails>

                <AccordionDetails>
                  We have collected ${vol.current_amount} so far. Your donation
                  can help us reach our goal of ${vol.target_amount}.
                </AccordionDetails>
              </div>

              <AccordionActions>
                <React.Fragment>
                  <Button
                    onClick={handleClickOpen}
                    variant="contained"
                    component="label"
                    className="donate-button"
                    sx={{
                      height: "50px", // Set custom height
                      width: "200px",
                      bgcolor: "rgb(15, 3, 70)", // Set the font color
                      fontSize: "18px", // Set the font size
                      marginTop: "50px",
                      "&:hover": {
                        bgcolor: "rgb(21, 4, 90)",
                      },
                    }}
                  >
                    Contribute
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      component: "form",
                      onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(
                          (formData as any).entries()
                        );
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                      },
                    }}
                  >
                    <DialogTitle>Payment Gateway</DialogTitle>
                    <DialogContent>
                      <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Amount"
                        fullWidth
                        variant="standard"
                        onChange={handleAmt}
                      />
                      <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Card Number"
                        type="text"
                        fullWidth
                        variant="standard"
                      />
                      <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                      />
                      <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="text"
                        label="CVV"
                        type="text"
                        fullWidth
                        variant="standard"
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button
                        onClick={handleClose}
                        sx={{
                          height: "50px", // Set custom height
                          width: "150px",
                          bgcolor: "rgb(15, 3, 70)", // Set the font color
                          fontSize: "18px", // Set the font size
                          marginTop: "50px",
                          color: "white",
                          "&:hover": {
                            bgcolor: "rgb(21, 4, 90)",
                          },
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        onClick={() => handlePayment(vol.ngo)}
                        sx={{
                          height: "50px", // Set custom height
                          width: "150px",
                          bgcolor: "rgb(15, 3, 70)", // Set the font color
                          fontSize: "18px", // Set the font size
                          marginTop: "50px",
                          color: "white",
                          "&:hover": {
                            bgcolor: "rgb(21, 4, 90)",
                          },
                        }}
                      >
                        Pay
                      </Button>
                    </DialogActions>
                  </Dialog>
                </React.Fragment>
              </AccordionActions>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
}
