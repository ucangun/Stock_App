import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { DeleteOutline } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import useStockCall from "../../hooks/useStockCall";

const iconStyle = {
  color: "primary.main",
};

function getRowId(row) {
  return row._id;
}

export default function ProductTable() {
  const { deleteStockData } = useStockCall();
  const { products } = useSelector((state) => state.stock);

  const columns = [
    { field: "_id", headerName: "ID", width: 100 },

    {
      field: "categoryId",
      headerName: "Category",
      width: 160,
      valueGetter: (value) => value?.name ?? "-NoCategory",
    },
    {
      field: "brandId",
      headerName: "Brand",
      width: 160,
      valueGetter: (value) => value?.name ?? "-NoBrand",
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
      sortable: false,
      width: 120,
      renderCell: (params) => (
        <Box
          sx={{
            mt: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <DeleteOutline
            onClick={() => deleteStockData("products", params.id)}
            sx={iconStyle}
          />
          <EditIcon sx={iconStyle} />
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%", mt: 4 }}>
      <DataGrid
        sx={{
          borderColor: "primary.main",
          cursor: "pointer",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
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
        disableRowSelectionOnClick
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </Box>
  );
}
