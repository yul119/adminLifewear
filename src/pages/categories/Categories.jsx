import "./categories.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CategoriesList from "./CategoriesList";

const Categories = () => {
  return (
    <div className="categories">
      <Sidebar />
      <div className="categoriesContainer">
        <Navbar />
        <CategoriesList />
      </div>
    </div>
  );
};

export default Categories;
