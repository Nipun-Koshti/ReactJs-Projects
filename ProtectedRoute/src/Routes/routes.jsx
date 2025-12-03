import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "../Components/Login";
import Product from "../Components/Product";
import Cart from "../Components/Cart";
import Dashboard from "../Components/Dashboard";
import Checker from "../Outlets/Checker";
import ProtectedRoutes from "./ProtectedRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Checker />}>
        <Route index element={<Product />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="cart" element={<Cart />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </>
  )
);

export default router;
