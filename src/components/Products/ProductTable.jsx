import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

const columns = [
  { field: "_id", headerName: "ID", width: 100 },
  {
    field: "brandId",
    headerName: "Brand",
    width: 160,
  },
  {
    field: "categoryId",
    headerName: "Category",
    width: 160,
  },
  {
    field: "name",
    headerName: "Product Name",
    type: "number",
    width: 180,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    description: "This column has a value getter and is not sortable.",
    width: 100,
  },
  {
    field: "actions",
    headerName: "Actions",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 100,
  },
];

function getRowId(row) {
  return row._id;
}

export default function ProductTable() {
  const { products } = useSelector((state) => state.stock);
  console.log(products);
  return (
    <Box sx={{ height: 400, width: "100%", mt: 4 }}>
      <DataGrid
        getRowId={getRowId}
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
      />
    </Box>
  );
}
