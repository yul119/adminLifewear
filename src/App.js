import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";

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
          </Route>
          <Route path="categories">
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
