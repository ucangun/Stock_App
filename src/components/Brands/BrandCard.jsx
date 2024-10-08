import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import useStockCall from "../../hooks/useStockCall";
import { useSelector } from "react-redux";

export default function BrandCard({
  _id,
  image,
  name,
  handleOpen,
  setInitialState,
}) {
  const { deleteStockData } = useStockCall();
  const { mode } = useSelector((state) => state.theme);

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: 360,
        height: 150,
        padding: "10px",
        cursor: "pointer",
        backgroundColor: mode === "dark" ? "#ffffff" : "#ffffff",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 160, objectFit: "contain" }}
        image={image}
        alt={name}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
        </CardContent>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <IconButton
            color="primary"
            onClick={() => {
              handleOpen(), setInitialState({ _id, name, image });
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => deleteStockData("brands", _id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
