import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./Auth.css";

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required.")
        .matches(
          "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$",
          "Invalid email address."
        ),
      password: Yup.string()
        .max(16, "Must be 16 characters or less.")
        .min(6, "Must be 6 characters or Grater.")
        .required("Password is required."),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="authentication-wrapper">
      <div className="authentication-box">
        <div className="authentication-form-box">
          <p className="authentication-title">Admin Sign In</p>
          <form method="post" autoComplete="off" onSubmit={formik.handleSubmit}>
            <div className="form-with-lable mb-5">
              <lable>Email</lable>
              <div className="input-box">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="is_error">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="form-with-lable mb-5">
              <lable>Password</lable>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="is_error">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="form-with-button text-center">
              <button className="">Sign In</button>
            </div>
          </form>
          <span className="block w-full text-center mt-3">Don't have an Acccount? <Link to={'/sign-up'} className="text-blue-900 underline">Sign UP</Link></span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
