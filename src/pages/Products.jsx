import { Button, Container } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import ProductTable from "../components/Products/ProductTable";
import ProductModal from "../components/Products/ProductModal";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();
  const [initialState, setInitialState] = useState({
    name: "",
    categoryId: "",
    brandId: "",
  });

  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      name: "",
      categoryId: "",
      brandId: "",
    });
  };

  const { getProCatBrand } = useStockCall();

  // with Promise.All method get datas together

  useEffect(() => {
    getProCatBrand();
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "1rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Button
        sx={{
          alignSelf: "center",
        }}
        variant="contained"
        onClick={handleOpen}
      >
        {t("createProduct")}
      </Button>

      <ProductTable handleOpen={handleOpen} setInitialState={setInitialState} />

      {open && (
        <ProductModal
          open={open}
          handleClose={handleClose}
          initialState={initialState}
        />
      )}
    </Container>
  );
};

export default Products;
