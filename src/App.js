import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Error from "./components/Pages/Error";
import Home from "./components/Pages/Home";
import AddUsers from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import ViewUser from "./components/users/ViewUser";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users/add" element={<AddUsers />} />
        <Route path="/users/edit/:id" element={<EditUser />} />
        <Route path="/users/:id" element={<ViewUser />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
