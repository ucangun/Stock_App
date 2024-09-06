import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import { Container, Grid2 } from "@mui/material";
import FirmCard from "../components/Firms/FirmCard";

const Firms = () => {
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);

  useEffect(() => {
    getStockData("firms");
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid2
        container
        spacing={4}
        mt={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {firms.map((firm) => (
          <Grid2
            xs={12}
            md={6}
            lg={4}
            xl={3}
            key={firm._id}
            justifyContent="center"
          >
            <FirmCard {...firm} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Firms;
