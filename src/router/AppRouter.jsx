import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AppLayout from "../components/AppLayout";
import Dashboard from "../pages/Dashboard";
import Purchases from "../pages/Purchases";
import Sales from "../pages/Sales";
import Firms from "../pages/Firms";
import Brands from "../pages/Brands";
import Products from "../pages/Products";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route element={<Navigate replace to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/firms" element={<Firms />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/products" element={<Products />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
