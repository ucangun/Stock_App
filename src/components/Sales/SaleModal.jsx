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

export default function SaleModal({ open, handleClose, initialState }) {
  const { t } = useTranslation();

  const { products, brands } = useSelector((state) => state.stock);
  const { postStockData, putStockData } = useStockCall();

  const [saleInfo, setSaleInfo] = React.useState(initialState);

  const handleChange = (e) => {
    setSaleInfo({
      ...saleInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (saleInfo._id) {
      putStockData("sales", saleInfo);
    } else {
      postStockData("sales", saleInfo);
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
              <InputLabel id="demo-simple-brand-label">
                {" "}
                {t("labelBrand")}
              </InputLabel>
              <Select
                labelId="demo-simple-brand-label"
                name="brandId"
                id="demo-simple-select"
                value={
                  saleInfo.brandId
                    ? saleInfo.brandId._id || saleInfo.brandId
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

            <FormControl fullWidth>
              <InputLabel id="demo-simple-brand-label">
                {" "}
                {t("labelProduct")}
              </InputLabel>
              <Select
                labelId="demo-simple-brand-label"
                name="productId"
                id="demo-simple-select"
                value={
                  saleInfo.productId
                    ? saleInfo.productId._id || saleInfo.productId
                    : ""
                }
                label="Brand"
                onChange={handleChange}
              >
                {products.map((product) => (
                  <MenuItem key={product._id} value={product._id}>
                    {product.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              id="quantity"
              name="quantity"
              value={saleInfo.quantity}
              label={t("labelQuantity")}
              onChange={handleChange}
              type="number"
            />

            <TextField
              id="price"
              name="price"
              value={saleInfo.price}
              label={t("labelProductPrice")}
              onChange={handleChange}
              type="number"
            />

            <Button type="submit" variant="contained">
              {saleInfo._id ? t("updateSale") : t("addNewSale")}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
