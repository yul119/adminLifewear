import "./products.scss";
import Button from "@mui/material/Button";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ProductList from "./ProductsList";
import { Link, useLocation } from "react-router-dom";
import MyBreadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { BACKEND_BASE_URL } from "../../lib/constant";

const Products = () => {
  const location = useLocation();
  return (
    <div className="products">
      <Sidebar />
      <div className="productsContainer">
        <Navbar />
        <MyBreadcrumbs url={location.pathname} />
        <div className="btnCreateContainer">
          <Link to={"/products/create"}>
            <Button variant="contained">Create</Button>
          </Link>
        </div>
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
