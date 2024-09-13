import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import KpiCards from "../components/Dashboard/KpiCards";

const Dashboard = () => {
  const { getDashboardPageData } = useStockCall();

  useEffect(() => {
    getDashboardPageData();
  }, []);

  return (
    <div>
      <KpiCards />
    </div>
  );
};

export default Dashboard;
