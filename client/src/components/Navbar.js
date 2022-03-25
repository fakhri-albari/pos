import { useEffect, useState } from "react";
import axios from "axios";
import { login } from "../features/user";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState({});
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.name);
  const email = useSelector((state) => state.user.email);
  useEffect(async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const result = await axios.post("http://localhost:5000/auth", {
        token,
      });
      if (result.data.error) {
        alert("Invalid authentication");
        console.log("remove token and redirect");
        localStorage.removeItem("token");
        navigate("../", { replace: true });
      } else {
        dispatch(login(result));
      }
    } catch (error) {
      alert("Invalid authentication");
      console.log("remove token and redirect");
      localStorage.removeItem("token");
      navigate("../", { replace: true });
    }
  }, []);
  return (
    <nav className="navbar bg-white shadow-sm">
      <div className="navbar-container d-flex justify-content-between">
        <div className="div-header d-flex">
          <h6 className="my-auto">{email}</h6>
        </div>
        <div className="div-header d-flex justify-content-center">
          <h2 className="fw-bold my-auto">POS</h2>
        </div>
        <div className="div-header d-flex justify-content-end">
          <div>
            <h6 className="d-inline me-3">19:00</h6>
            <button className="btn btn-outline-dark">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
