import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes path={"/"}>
          <Route path={"/"} element={<Login />} />
          <Route
            path={"/homepage"}
            element={
              <>
                <Navbar />
                <Homepage />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
