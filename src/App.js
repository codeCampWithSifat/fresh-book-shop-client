import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/AddProduct/AddProduct";
import Checkout from "./Components/Checkout/Checkout";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import NotFound from "./Components/NotFound/NotFound";
import Order from "./Components/Order/Order";
import Navbar from "./Components/Shared/Navbar/Navbar";
import RequiredAuth from "./Components/Login/RequiredAuth/RequiredAuth";
import ManageProduct from "./Components/ManageProduct/ManageProduct";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/manageproducts" element={<ManageProduct />}/>
        <Route
          path="/addproduct"
          element={
            <RequiredAuth>
              <AddProduct />
            </RequiredAuth>
          }
        />
        <Route
          path="/checkout/:id"
          element={
            <RequiredAuth>
              <Checkout />
            </RequiredAuth>
          }
        />
        <Route
          path="/order"
          element={
            <RequiredAuth>
              <Order />
            </RequiredAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
