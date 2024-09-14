import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../Logo";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const icon = (name) => `/assets/sidebar/${name}.svg`;

const btnStyle = {
  color: "secondary.contrastText",
  transition: "all 0.4s ",
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
  transition: "all 0.4s",
  "& .MuiBox-root": {
    backgroundColor: "primary.contrastText",
  },
  "&:hover": {
    backgroundColor: "primary.light",
    color: "primary.contrastText",
  },
};

const SidebarListItems = () => {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLanguageChange = () => {
      setLoading(false);
    };

    i18n.on("languageChanged", handleLanguageChange);

    // Dil değiştirildiğinde ilk render'ı beklemek için timeout
    setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  const links = [
    {
      title: t("dashboard"),
      url: "/dashboard",
      icon: icon("chart-icon"),
    },
    {
      title: t("purchases"),
      url: "/purchases",
      icon: icon("add-to-cart-icon"),
    },
    {
      title: t("sales"),
      url: "/sales",
      icon: icon("delete-cart-item-icon"),
    },
    {
      title: t("firms"),
      url: "/firms",
      icon: icon("company-enterprise-icon"),
    },
    {
      title: t("brands"),
      url: "/brands",
      icon: icon("tags-line-icon"),
    },
    {
      title: t("products"),
      url: "/products",
      icon: icon("fmcg-products-icon"),
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="self-center pt-2">
          <Logo type="primary" />
        </div>
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
      </div>
    </>
  );
};

export default SidebarListItems;
