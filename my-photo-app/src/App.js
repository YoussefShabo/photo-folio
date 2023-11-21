import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PhotoList from "./PhotoList";
import AdminPage from "./AdminPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PhotoList />} />
        <Route path="/admin" element={<AdminPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
