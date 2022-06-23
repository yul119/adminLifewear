import "./productList.scss";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsSelector } from "../../store/selectors";
import { fetchProducts } from "../../store/slices/productsSlice";
import { formatDate, formatMoney } from "../../lib/helper";
import { Rating } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

export default function ProductList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const productsReducer = useSelector(productsSelector);
  const productRows = productsReducer.activeProducts;
  const isLoading = productsReducer.isLoading;
  console.log(
    "🚀 ~ file: ProductsLlist.jsx ~ line 19 ~ ProductList ~ productRows",
    productRows
  );

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "cover",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListProduct">
            <img
              className="productListImg"
              src={params.value}
              alt=""
            />
          </div>
        );
      },
    },
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListPrice">
            <p className="salePrice">
              {formatMoney(params.row.sale_price)}
            </p>
            <p className="oldPrice">
              {formatMoney(params.row.price)}
            </p>
          </div>
        );
      },
    },
    {
      field: "rating_avg",
      headerName: "Rating",
      width: 200,
      renderCell: (params) => (
        <Rating value={params.value} readOnly />
      ),
    },
    {
      field: "created_at",
      headerName: "Create at",
      width: 200,
      renderCell: (params) => formatDate(params.value),
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListAction">
            <Link to={`/products/edit/${params.row.id}`}>
              <ModeEditOutlineOutlinedIcon className="productListEdit" />
            </Link>
            <Link to={"/products/"}>
              <VisibilityOffOutlinedIcon className="productListView" />
            </Link>
            <DeleteOutlineOutlinedIcon className="productListDelete" />
          </div>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={productRows}
        getRowHeight={() => "auto"}
        columns={columns}
        pageSize={30}
        components={
          isLoading && {
            LoadingOverlay: LinearProgress,
          }
        }
        loading={isLoading}
      />
    </div>
  );
}
