import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import { Button, Container, Grid2, Typography } from "@mui/material";
import FirmCard from "../components/Firms/FirmCard";
import FirmModal from "../components/Firms/FirmModal";

const Firms = () => {
  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);

  useEffect(() => {
    getStockData("firms");
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
        Create Firm
      </Button>
      <FirmModal open={open} handleClose={handleClose} />

      <Grid2
        container
        spacing={4}
        mt={4}
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
            <FirmCard handleOpen={handleOpen} {...firm} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Firms;
