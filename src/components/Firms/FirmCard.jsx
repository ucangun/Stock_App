import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function FirmCard({ image, address, name, phone }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "5px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center" }}
        >
          {name}
        </Typography>
      </CardContent>

      <CardMedia
        sx={{ height: 140, objectFit: "contain", marginBottom: "1rem" }}
        component="img"
        image={image}
        title={name}
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {address}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {phone}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          alignSelf: "center",
        }}
      >
        <Button size="small">Update</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
