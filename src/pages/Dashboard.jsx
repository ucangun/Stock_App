import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import KpiCards from "../components/Dashboard/KpiCards";
import Charts from "../components/Dashboard/Charts";
import { Container } from "@mui/material";

const Dashboard = () => {
  const { getDashboardPageData } = useStockCall();

  useEffect(() => {
    getDashboardPageData();
  }, []);

  return (
    <Container maxWidth={"xl"}>
      <KpiCards />
      <Charts />
    </Container>
  );
};

export default Dashboard;
