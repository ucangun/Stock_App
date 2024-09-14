import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import useStockCall from "../../hooks/useStockCall";
import { useTranslation } from "react-i18next";

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

export default function FirmModal({ open, handleClose, initialState }) {
  const { t } = useTranslation();

  const { postStockData, putStockData } = useStockCall();

  const [firmInfo, setFirmInfo] = React.useState(initialState);

  const handleChange = (e) => {
    setFirmInfo({
      ...firmInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firmInfo._id) {
      putStockData("firms", firmInfo);
    } else {
      postStockData("firms", firmInfo);
    }

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
              label={t("labelFirmName")}
              onChange={handleChange}
              type="text"
            />
            <TextField
              id="address"
              name="address"
              value={firmInfo.address}
              label={t("labelFirmAddress")}
              onChange={handleChange}
              type="text"
            />
            <TextField
              id="phone"
              name="phone"
              value={firmInfo.phone}
              label={t("labelPhoneNumber")}
              onChange={handleChange}
              type="text"
            />
            <TextField
              id="image"
              name="image"
              value={firmInfo.image}
              label={t("labelFirmImage")}
              onChange={handleChange}
              type="url"
            />
            <Button type="submit" variant="contained">
              {firmInfo._id ? t("updateFirm") : t("createFirm")}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
