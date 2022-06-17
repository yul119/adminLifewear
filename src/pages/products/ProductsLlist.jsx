import "./productList.scss";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsSelector } from "../../store/selectors";
import { fetchProducts } from "../../store/slices/productsSlice";
import { formatDate, formatMoney } from "../../lib/helper";
import MyBreadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { Rating } from "@mui/material";

export default function ProductList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const productRows = useSelector(productsSelector);
  console.log(
    "🚀 ~ file: ProductsLlist.jsx ~ line 19 ~ ProductList ~ productRows",
    productRows
  );

  const loaction = useLocation();

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
            <Link to={"/products/"}>
              <RemoveRedEyeOutlinedIcon className="productListView" />
            </Link>
            <DeleteOutlineOutlinedIcon className="productListDelete" />
          </div>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <MyBreadcrumbs url={loaction.pathname} />
      <DataGrid
        rows={productRows}
        getRowHeight={() => "auto"}
        columns={columns}
        pageSize={10}
      />
    </div>
  );
}
