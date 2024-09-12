import { Button, Container } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import SaleModal from "../components/Sales/SaleModal";
import SaleTable from "../components/Sales/SaleTable";

const Purchases = () => {
  const [initialState, setInitialState] = useState({
    brandId: "",
    productId: "",
    quantity: "",
    price: "",
  });

  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      brandId: "",
      productId: "",
      quantity: "",
      price: "",
    });
  };

  const { getSalesBrandPro } = useStockCall();

  // with Promise.All method get datas together

  useEffect(() => {
    getSalesBrandPro();
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
        Add New Sale
      </Button>

      <SaleTable handleOpen={handleOpen} setInitialState={setInitialState} />

      {open && (
        <SaleModal
          open={open}
          handleClose={handleClose}
          initialState={initialState}
        />
      )}
    </Container>
  );
};

export default Purchases;
