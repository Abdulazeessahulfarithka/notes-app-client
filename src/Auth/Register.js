import React from "react";
import "./Register.css";
import * as yup from "yup";
import axios from "axios";
import API from "../Global.js";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const loginValidationSchema = yup.object({
  name: yup.string().required().min(4),
  email: yup.string().email().required().min(6),
  password: yup.string().required().min(6),
});
const Register=() =>{
  const navigate = useNavigate();
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        emai:"",
        password: "",
      },
      validationSchema: loginValidationSchema,
      onSubmit: async (values) => {
        try {
          const res = await axios.post(`${API}/api/user/register`,values);
          console.log(res)
          if (res && res.data.success) {
            toast.success(res.data.message);
            console.log(res)
            navigate("/");
          } else {
            toast.error(res.data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error("Invalid Credential");
        }
        console.log(values)
      },
    });
  return (
    <section
      class="vh-100 bg-image"
      style={{
        backgroundimage:
          " url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
      }}
    >
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" style={{ borderradius: "15px" }}>
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <TextField
                      label="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.name && !!errors.name}
                      helperText={
                        touched.name && errors.name ? errors.name : null
                      }
                      className="mb-3"
                      type="text"
                      fullWidth
                      required
                    />

                    <TextField
                      label="Email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && !!errors.email}
                      helperText={
                        touched.email && errors.email ? errors.email : null
                      }
                      className="mb-3"
                      type="text"
                      fullWidth
                      required
                    />

                    <TextField
                      label="Password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && !!errors.password}
                      helperText={
                        touched.password && errors.password
                          ? errors.password
                          : null
                      }
                      className="mb-3"
                      type="password"
                      fullWidth
                      required
                    />
                  </form>

                  {/* <div class="form-check d-flex justify-content-center mb-5">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                      /> */}
                  {/* <label class="form-check-label" for="form2Example3g">
                        I agree all statements in{" "}
                        <a href="#!" class="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label> */}
                  {/* </div> */}

                  <div class="d-flex justify-content-center">
                    <button value="submit" type={"submit"} color="primary">
                      Register
                    </button>
                  </div>

                  <p class="text-center text-muted mt-5 mb-0">
                    Have already an account?{" "}
                    <a href="#!" class="fw-bold text-body">
                      <u>Login here</u>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
