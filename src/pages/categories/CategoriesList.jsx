import "./categoriesList.scss";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesSelector } from "../../store/selectors";
import { formatDate, formatMoney } from "../../lib/helper";
import MyBreadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { Rating } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { fetchCategories } from "../../store/slices/categoriesSlice";
import {
  DataGridPremium,
  GridToolbar,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";

export default function CategoriesList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const categoriesReducer = useSelector(categoriesSelector);
  const isLoading = categoriesReducer.isLoading;

  const loaction = useLocation();

  const columns = [
    { field: "id", headerName: "Id", width: 100 },
    { field: "name", headerName: "Name", width: 300 },
    {
      field: "parentName",
      headerName: "Parent Name",
      width: 250,
    },
    {
      field: "description",
      headerName: "Description",
      width: 480,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="categoriesListAction">
            <Link to={"/categoriess/"}>
              <ModeEditOutlineOutlinedIcon className="categoriesListEdit" />
            </Link>
            <DeleteOutlineOutlinedIcon className="categoriesListDelete" />
          </div>
        );
      },
    },
  ];

  const categoriesRows = [];
  categoriesReducer.categories.map((el) => {
    const obj = {};
    obj.id = el.id;
    obj.name = el.name;
    obj.description = el.description;
    obj.parentId = "-";
    obj.parentName = "-";

    categoriesRows.push(obj);
  });

  categoriesReducer.categories.map((el) => {
    el.children.map((ell) => {
      const obj = {};
      obj.id = ell.id;
      obj.name = ell.name;
      obj.description = ell.description;
      obj.parentId = el.id;
      obj.parentName = el.name;

      categoriesRows.push(obj);
    });
  });

  return (
    <div className="categoriesList">
      <MyBreadcrumbs url={loaction.pathname} />
      <DataGrid
        rows={categoriesRows}
        columns={columns}
        pageSize={10}
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
