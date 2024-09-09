import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import useStockCall from "../../hooks/useStockCall";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid primary.main ",
  boxShadow: 24,
  p: 4,
};

export default function FirmModal({ open, handleClose }) {
  const { postStockData } = useStockCall();

  const [firmInfo, setFirmInfo] = React.useState({
    name: "",
    address: "",
    phone: "",
    image: "",
  });

  const handleChange = (e) => {
    setFirmInfo({
      ...firmInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postStockData("firms", firmInfo);
    setFirmInfo({
      name: "",
      address: "",
      phone: "",
      image: "",
    });
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            onSubmit={handleSubmit}
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            <TextField
              id="name"
              name="name"
              value={firmInfo.name}
              label="Firm Name"
              onChange={handleChange}
              type="text"
            />
            <TextField
              id="address"
              name="address"
              value={firmInfo.address}
              label="Firm Address"
              onChange={handleChange}
              type="text"
            />
            <TextField
              id="phone"
              name="phone"
              value={firmInfo.phone}
              label="Phone Number"
              onChange={handleChange}
              type="text"
            />
            <TextField
              id="image"
              name="image"
              value={firmInfo.image}
              label="Firm Image"
              onChange={handleChange}
              type="url"
            />
            <Button type="submit" variant="contained">
              Create Firm
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
