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

export default function PurchaseTable({ handleOpen, setInitialState }) {
  const { deleteStockData } = useStockCall();
  const { purchases } = useSelector((state) => state.stock);

  const columns = [
    {
      field: "_id",
      headerName: "Id",
      minWidth: 40,
      maxWidth: 70,
      flex: 1,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
    },

    {
      field: "firmId",
      headerName: "Firm",
      minWidth: 150,
      flex: 2,
      valueGetter: (value) => value?.name ?? "-NoFirm",
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
      field: "productId",
      headerName: "Product Name",
      flex: 2,
      minWidth: 150,
      valueGetter: (value) => value?.name ?? "-NoProduct",
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
      field: "price",
      headerName: "Price",
      type: "number",
      flex: 1,
      minWidth: 150,
      headerAlign: "center",
    },
    {
      field: "amount",
      headerName: "Amount",
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
      flex: 1,
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
          <EditIcon
            sx={iconStyle}
            onClick={() => {
              handleOpen();
              setInitialState({
                _id: params.row._id,
                firmId: params.row.firmId,
                brandId: params.row.brandId,
                productId: params.row.productId,
                quantity: params.row.quantity,
                price: params.row.price,
              });
            }}
          />
          <DeleteOutline
            onClick={() => deleteStockData("purchases", params.id)}
            sx={iconStyle}
          />
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        autoHeight
        sx={{
          mt: 4,
          borderColor: "primary.main",
          cursor: "pointer",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
        getRowId={getRowId}
        rows={purchases}
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
