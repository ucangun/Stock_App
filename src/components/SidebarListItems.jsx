import React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const links = [
  {
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    title: "Purchases",
    url: "/purchases",
  },
  {
    title: "Sales",
    url: "/sales",
  },
  {
    title: "Firms",
    url: "/firms",
  },
  {
    title: "Brands",
    url: "/brands",
  },
  {
    title: "Products",
    url: "/products",
  },
];

const SidebarListItems = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div>
        <Logo type="primary" />
      </div>
      <List>
        {links.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton onClick={() => navigate(item.url)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SidebarListItems;
