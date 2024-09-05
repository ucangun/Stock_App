import React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Logo from "./Logo";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const icon = (name) => `/assets/sidebar/${name}.svg`;

const links = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: icon("chart-icon"),
  },
  {
    title: "Purchases",
    url: "/purchases",
    icon: icon("add-to-cart-icon"),
  },
  {
    title: "Sales",
    url: "/sales",
    icon: icon("delete-cart-item-icon"),
  },
  {
    title: "Firms",
    url: "/firms",
    icon: icon("company-enterprise-icon"),
  },
  {
    title: "Brands",
    url: "/brands",
    icon: icon("tags-line-icon"),
  },
  {
    title: "Products",
    url: "/products",
    icon: icon("fmcg-products-icon"),
  },
];

const btnStyle = {
  color: "secondary.contrastText",
  transition: "all 0.3s ease-in-out",
  borderRadius: "10px",

  "&:hover": {
    backgroundColor: "primary.light",
    color: "primary.contrastText",
    "& .MuiBox-root": {
      backgroundColor: "primary.contrastText",
    },
  },
};
const selectedStyle = {
  backgroundColor: "primary.main",
  color: "primary.contrastText",
  transition: "all 0.3s ease-in-out",
  borderRadius: "10px",

  "& .MuiBox-root": {
    backgroundColor: "primary.contrastText",
  },
  "&:hover": {
    backgroundColor: "primary.light",
    color: "primary.contrastText",
  },
};

const SidebarListItems = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Logo type="primary" />
      <List>
        {links.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.url)}
              sx={item.url === location.pathname ? selectedStyle : btnStyle}
            >
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  mr: 2,
                  mask: `url(${item.icon}) no-repeat center / contain `,
                  bgcolor: "primary.main",
                }}
              />
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SidebarListItems;
