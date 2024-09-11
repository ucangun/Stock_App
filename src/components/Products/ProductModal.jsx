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

export default function ProductModal({ open, handleClose, initialState }) {
  const { categories, brands } = useSelector((state) => state.stock);
  const { postStockData, putStockData } = useStockCall();

  const [productInfo, setProductInfo] = React.useState(initialState);

  const handleChange = (e) => {
    setProductInfo({
      ...productInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productInfo._id) {
      putStockData("products", productInfo);
    } else {
      postStockData("products", productInfo);
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
                  productInfo.categoryId
                    ? productInfo.categoryId._id || productInfo.categoryId
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
                  productInfo.brandId
                    ? productInfo.brandId._id || productInfo.brandId
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
              value={productInfo.name}
              label="Product Name"
              onChange={handleChange}
              type="text"
            />

            <Button type="submit" variant="contained">
              {productInfo._id ? "Update Product" : "Create Product"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
