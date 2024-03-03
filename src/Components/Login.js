import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div classNameName="container">
      <nav className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use href="#bootstrap" />
            </svg>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"></ul>
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <button type="button" className="btn btn-outline-light me-2">
                Open Note
              </button>
            </form>

            <div className="text-end">
              <NavLink
                type="button"
                className="btn btn-outline-light me-2"
                to={"/layout"}
              >
                Login
              </NavLink>
              <NavLink
                type="button"
                className="btn btn-warning"
                to={"/register"}
              >
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Login;
