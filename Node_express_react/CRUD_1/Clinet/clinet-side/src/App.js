//import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import AddEdit from "./pages/Addedit/AddEdit";
import View from "./pages/View/View";
import Header from "./component/Header";
import Register from "./pages/LoginRegister/Register";
import Login from "./pages/LoginRegister/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEdit />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/update/:id" element={<AddEdit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
