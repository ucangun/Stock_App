import React, { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import { Container, Grid2 } from "@mui/material";
import BrandCard from "../components/Brands/BrandCard";

const Brands = () => {
  const { getStockData } = useStockCall();
  const { brands } = useSelector((state) => state.stock);

  useEffect(() => {
    getStockData("brands");
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: 6,
      }}
    >
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
