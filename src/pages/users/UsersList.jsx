import "./usersList.scss";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "../../store/selectors";
import { fetchUsers } from "../../store/slices/usersSlice";
import { formatDate } from "../../lib/helper";
import MyBreadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

export default function UserList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const userRows = useSelector(usersSelector);
  // console.log(
  // "🚀 ~ file: UsersList.jsx ~ line 16 ~ UserList ~ userRows",
  // userRows
  // );

  const loaction = useLocation();

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "full_name",
      headerName: "User name",
      width: 200,
    },
    {
      field: "dob",
      headerName: "Date of birth",
      width: 200,
      renderCell: (p) => formatDate(p.value),
    },
    {
      field: "gender",
      headerName: "Gender",
      width: 200,
      renderCell: (params) =>
        params.value === "0" ? "Male" : "Female",
    },
    { field: "phone", headerName: "Phone", width: 250 },
    {
      field: "joined_at",
      headerName: "Joined at",
      width: 200,
      renderCell: (params) => formatDate(params.value),
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/"}>
              <RemoveRedEyeOutlinedIcon className="userListView" />
            </Link>
            <DeleteOutlineOutlinedIcon className="userListDelete" />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <MyBreadcrumbs url={loaction.pathname} />
      <DataGrid
        rows={userRows}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}
