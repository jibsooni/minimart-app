import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemList from "./components/items-list.component";
import AddItem from "./components/add-item.component";
import UserLogin from "./components/user-login.component";
import Item from "./components/item.component";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <Link to={"/"} className="navbar-brand">
          <h2>UncleJack's Minimart</h2>
        </Link>
        <div className="navbar-nav mr-auto">
            {/* <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin
              </Link>
            </li>
          </div>
      </nav>
      <div className="container mt-3">
          <Routes>
            <Route path="/" element={<ItemList/>} />
            <Route path="/add" element={<AddItem/>} />
            <Route path="/admin" element={<UserLogin/>} />
            <Route path="/update/:name" element={<Item/>} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
