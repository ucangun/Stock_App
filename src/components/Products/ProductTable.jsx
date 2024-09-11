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

export default function ProductTable({ handleOpen, setInitialState }) {
  const { deleteStockData } = useStockCall();
  const { products } = useSelector((state) => state.stock);

  const { _id, categoryId, brandId, name } = products;

  const columns = [
    {
      field: "_id",
      headerName: "Id",
      minWidth: 40,
      maxWidth: 70,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },

    {
      field: "categoryId",
      headerName: "Category",
      minWidth: 150,
      flex: 2,
      valueGetter: (value) => value?.name ?? "-NoCategory",
      headerAlign: "center",
    },
    {
      field: "brandId",
      headerName: "Brand",
      minWidth: 150,
      flex: 2,
      valueGetter: (value) => value?.name ?? "-NoBrand",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Product Name",
      flex: 2,
      minWidth: 150,
      headerAlign: "center",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      minWidth: 60,

      headerAlign: "center",

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
          <EditIcon
            sx={iconStyle}
            onClick={() => {
              handleOpen();
              setInitialState({
                _id: params.row._id,
                name: params.row.name,
                categoryId: params.row.categoryId,
                brandId: params.row.brandId,
              });
            }}
          />
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        sx={{
          mt: 4,
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
        pageSizeOptions={[5, 10, 20]}
        disableRowSelectionOnClick
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </Box>
  );
}
