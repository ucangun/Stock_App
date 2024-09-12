import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, TextField } from "@mui/material";
import useStockCall from "../../hooks/useStockCall";
import { useSelector } from "react-redux";

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

export default function PurchaseModal({ open, handleClose, initialState }) {
  const { categories, brands } = useSelector((state) => state.stock);
  const { postStockData, putStockData } = useStockCall();

  const [purchaseInfo, setPurchaseInfo] = React.useState(initialState);

  const handleChange = (e) => {
    setPurchaseInfo({
      ...purchaseInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (purchaseInfo._id) {
      putStockData("purchases", purchaseInfo);
    } else {
      postStockData("purchases", purchaseInfo);
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
            <FormControl fullWidth>
              <InputLabel id="demo-simple-category-label">Category</InputLabel>
              <Select
                labelId="demo-simple-category-label"
                name="categoryId"
                id="demo-simple-select"
                value={
                  purchaseInfo.categoryId
                    ? purchaseInfo.categoryId._id || purchaseInfo.categoryId
                    : ""
                }
                label="Category"
                onChange={handleChange}
              >
                {categories.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-brand-label">Brand</InputLabel>
              <Select
                labelId="demo-simple-brand-label"
                name="brandId"
                id="demo-simple-select"
                value={
                  purchaseInfo.brandId
                    ? purchaseInfo.brandId._id || purchaseInfo.brandId
                    : ""
                }
                label="Brand"
                onChange={handleChange}
              >
                {brands.map((brand) => (
                  <MenuItem key={brand._id} value={brand._id}>
                    {brand.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              id="name"
              name="name"
              value={purchaseInfo.name}
              label="Product Name"
              onChange={handleChange}
              type="text"
            />

            <Button type="submit" variant="contained">
              {purchaseInfo._id ? "Update Purchase" : "Add New Purchase"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
