import { Button, Container } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FirmModal from "../components/Firms/FirmModal";
import useStockCall from "../hooks/useStockCall";
import ProductTable from "../components/Products/ProductTable";

const Products = () => {
  const [initialState, setInitialState] = useState({
    name: "",
    address: "",
    phone: "",
    image: "",
  });

  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      name: "",
      address: "",
      phone: "",
      image: "",
    });
  };

  const { getStockData } = useStockCall();

  useEffect(() => {
    getStockData("products");
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
        Create Products
      </Button>

      <ProductTable />

      {open && (
        <FirmModal
          open={open}
          handleClose={handleClose}
          initialState={initialState}
        />
      )}
    </Container>
  );
};

export default Products;
