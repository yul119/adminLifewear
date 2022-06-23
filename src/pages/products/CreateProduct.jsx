import "./products.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import MyBreadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

const CreateProduct = () => {
  const location = useLocation();
  console.log(
    "🚀 ~ file: CreateProduct.jsx ~ line 9 ~ CreateProduct ~ location",
    location
  );
  return (
    <div className="products">
      <Sidebar />
      <div className="productsContainer">
        <Navbar />
        <MyBreadcrumbs url={location.pathname} />
      </div>
    </div>
  );
};

export default CreateProduct;
