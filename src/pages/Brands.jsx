import React, { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import { Button, Container, Grid2 } from "@mui/material";
import BrandCard from "../components/Brands/BrandCard";
import BrandModal from "../components/Brands/BrandModal";

const Brands = () => {
  const { getStockData } = useStockCall();
  const { brands } = useSelector((state) => state.stock);

  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getStockData("brands");
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Button
        sx={{
          alignSelf: "center",
        }}
        variant="contained"
        onClick={handleOpen}
      >
        Create Brand
      </Button>
      <BrandModal open={open} handleClose={handleClose} />
      <Grid2
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {brands.map((brand) => (
          <Grid2 xs={12} md={6} lg={4} xl={3} key={brand._id}>
            <BrandCard {...brand} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Brands;
