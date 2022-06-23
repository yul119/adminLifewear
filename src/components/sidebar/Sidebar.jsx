import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ImportExportOutlinedIcon from "@mui/icons-material/ImportExportOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Lifewear.</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">ADMINISTRATION</p>
          <Link
            to="/users"
            style={{ textDecoration: "none" }}
          >
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link
            to="/products"
            style={{ textDecoration: "none" }}
          >
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link
            to="/categories"
            style={{ textDecoration: "none" }}
          >
            <li>
              <CreditCardIcon className="icon" />
              <span>Categories</span>
            </li>
          </Link>
          <Link
            to="/orders"
            style={{ textDecoration: "none" }}
          >
            <li>
              <ShoppingCartOutlinedIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>
          <Link
            to="/staffs"
            style={{ textDecoration: "none" }}
          >
            <li>
              <BadgeOutlinedIcon className="icon" />
              <span>Our Staffs</span>
            </li>
          </Link>
          <p className="title">IMPORT</p>
          <li>
            <ImportExportOutlinedIcon className="icon" />
            <span>Import Products</span>
          </li>
          <li>
            <HistoryOutlinedIcon className="icon" />
            <span>History</span>
          </li>
          <p className="title">REPORT</p>
          <p className="title"> ACCOUNT</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Infomation</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
