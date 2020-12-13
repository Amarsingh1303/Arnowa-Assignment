import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { ADD_DETAILS } from "../../redux/user/userAction";
const SignUpForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Required")
        .max(15, "Must be 15 characters or less")
        .min(2, "too short"),
      name: Yup.string()
        .required("Required")
        .max(20, "Must be 20 characters or less")
        .min(3, "too short"),
      email: Yup.string().required("Required").email("Invalid email address"),
      password: Yup.string()
        .required("required")
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/,
          "password must be 1 Uppercase 1 lowercase 1 number 1 special characeter"
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(ADD_DETAILS(values));
      history.push("/task1/home");
    },
  });
  return (
    <div className="form-container">
      <h1 className="text-center">Welcome to signup form</h1>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">username</label>
          <input
            id="username"
            name="username"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />

          {formik.touched.username && formik.errors.username ? (
            <div className="error">
              <p>{formik.errors.username}</p>
            </div>
          ) : null}

          <label htmlFor="lastName">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
          <label htmlFor="email">password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
