import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // const alert = (
  //   <>
  //     <div class="alert alert-danger" role="alert">
  //       Email or password wrong
  //     </div>
  //   </>
  // );

  const onClick = async () => {
    const { email, password } = data;

    if (email.length > 0 && password.length > 0) {
      try {
        const result = await axios.post("http://localhost:5000/login", {
          email,
          password,
        });
        const { token } = result.data;

        if (!token) {
          alert(result.data.msg);
        } else {
          localStorage.setItem("token", token);
          navigate("../homepage", { replace: true });
        }
      } catch (error) {
        const err = error.response;
        alert(err.data.errors[0].msg);
      }
    } else {
      alert("Email and Password must be filled");
    }
  };

  const onChange = (e) => {
    setData((state) => {
      return {
        ...state,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="container-login mx-auto border border-light bg-white shadow-sm p-5 mt-5">
      <div className="mb-3">
        <h1 className="fw-bold">POS</h1>
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="email"
          placeholder="email"
          name="email"
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="password"
          onChange={onChange}
        />
      </div>
      <div className="mt-4">
        <button
          className="btn btn-outline-dark w-100 fw-normal"
          type="button"
          onClick={onClick}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
