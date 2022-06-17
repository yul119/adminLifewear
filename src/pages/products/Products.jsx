import "./products.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ProductList from "./ProductsLlist";

const Products = () => {
  return (
    <div className="products">
      <Sidebar />
      <div className="productsContainer">
        <Navbar />
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
