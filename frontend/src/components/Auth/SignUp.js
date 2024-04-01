import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Full Name is required.")
        .matches("^[a-zA-Z ]*$", "Invalid string."),
      email: Yup.string()
        .required("Email is required.")
        .matches(
          "^([a-zA-Z0-9_.$#-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$",
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
          <p className="authentication-title">Admin Sign Up</p>
          <form method="post" autoComplete="off" onSubmit={formik.handleSubmit}>
            <div className="form-with-lable mb-5">
              <lable>Full Name</lable>
              <div className="input-box">
                <input
                  type="text"
                  name="full_name"
                  placeholder="Enter Full Name"
                  onChange={formik.handleChange}
                  value={formik.values.full_name}
                />
              </div>
              {formik.touched.full_name && formik.errors.full_name ? (
                <div className="is_error">{formik.errors.full_name}</div>
              ) : null}
            </div>
            <div className="form-with-lable mb-5">
              <lable>Email</lable>
              <div className="input-box">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Email"
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
                  placeholder="Enter Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="is_error">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="form-with-button text-center">
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
        <span className="block w-full text-center mt-3">
          Already Have an Acccount?&nbsp;
          <Link to={"/"} className="text-blue-900 underline">
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
