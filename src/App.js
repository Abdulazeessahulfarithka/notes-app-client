import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Dashboard from "./Pages/Dashboard";
import Header from "./Pages/Header";
import Home from "./Components/Home";
import Layout from "./Auth/Layout";
import Register from "./Auth/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/layout" element={<Layout/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>

    </Routes>
  );
}

export default App;
