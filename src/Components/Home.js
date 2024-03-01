import React from "react";
import Login from "./Login";
import Footer from "./Footer";
import Header from "../Pages/Header";

const Home = ({ childern }) => {
  return (
    <>
      <main>
        <div className="App">
          <Login />
          <div className="container">
            <div className="row">
              <Header />
            </div>
          </div>
          <div className="container">
            <img
              src=" https://images.pexels.com/photos/3782134/pexels-photo-3782134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            ></img>
            <div className="col-xl-12">
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
