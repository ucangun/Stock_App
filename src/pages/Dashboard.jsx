import { Button } from "@mui/material";
import React from "react";
import useAuthCall from "../hooks/useAuthCall";

const Dashboard = () => {
  const { logout } = useAuthCall();
  return (
    <div>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default Dashboard;
