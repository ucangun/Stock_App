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

export default function BrandModal({ open, handleClose }) {
  const { postStockData, putStockData } = useStockCall();

  const [brandInfo, setBrandInfo] = React.useState({
    name: "",
    image: "",
  });

  const handleChange = (e) => {
    setBrandInfo({ ...brandInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postStockData("brands", brandInfo);
    setBrandInfo({
      name: "",
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
              label="Brand Name"
              type="text"
              value={brandInfo.name}
              onChange={handleChange}
            />
            <TextField
              id="image"
              name="image"
              label="Brand Image"
              type="url"
              value={brandInfo.image}
              onChange={handleChange}
            />

            <Button type="submit" variant="contained">
              Create Brand
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
