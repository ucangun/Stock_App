import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import KpiCards from "../components/Dashboard/KpiCards";
import Charts from "../components/Dashboard/Charts";

const Dashboard = () => {
  const { getDashboardPageData } = useStockCall();

  useEffect(() => {
    getDashboardPageData();
  }, []);

  return (
    <div>
      <KpiCards />
      <Charts />
    </div>
  );
};

export default Dashboard;
