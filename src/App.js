import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Categories from "./pages/categories/Categories";
import CreateProduct from "./pages/products/CreateProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="users">
            <Route index element={<Users />} />
          </Route>
          <Route path="products">
            <Route index element={<Products />} />
            <Route path="create" element={<CreateProduct />} />
            <Route path="edit/:productId" element={<Products />} />
          </Route>
          <Route path="categories">
            <Route index element={<Categories />} />
          </Route>
          <Route path="orders">
            <Route index element={<Users />} />
          </Route>
          <Route path="staffs">
            <Route index element={<Users />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
