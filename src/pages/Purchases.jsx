import { Button, Container } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import PurchaseModal from "../components/Purchases/PurchaseModal";
import PurchaseTable from "../components/Purchases/PurchaseTable";

const Purchases = () => {
  const [initialState, setInitialState] = useState({
    firmId: "",
    brandId: "",
    productId: "",
    quantity: null,
    price: null,
  });

  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      firmId: "",
      brandId: "",
      productId: "",
      quantity: 0,
      price: 0,
    });
  };

  const { getStockData } = useStockCall();

  // with Promise.All method get datas together

  useEffect(() => {
    getStockData("purchases");
    getStockData("firms");
    getStockData("brands");
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
        New Purchase
      </Button>

      <PurchaseTable
        handleOpen={handleOpen}
        setInitialState={setInitialState}
      />

      {open && (
        <PurchaseModal
          open={open}
          handleClose={handleClose}
          initialState={initialState}
        />
      )}
    </Container>
  );
};

export default Purchases;
