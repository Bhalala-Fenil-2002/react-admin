import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./Auth.css";
import Lottie from "react-lottie";
import LoginAnimation from "../../assets/admin_animation_on_auth.json";
import AdminIcons from "../../assets/admin_icons.png";

const SignIn = () => {
  const navigate = useNavigate();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoginAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
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
  });

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      await axios
        .post(`${process.env.REACT_APP_LOCAL_URL}sign-in`, values)
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem(
              process.env.REACT_APP_SECRET_KEY,
              response.data.data.authentication
            );
            navigate("/dashboard");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <div className="authentication-wrapper">
      <div className="authentication-left">
        <div className="authentication-box">
          <div className="authentication-form-box">
            <div className="admin-icons">
              <img src={AdminIcons} alt="admin icons" />
            </div>
            <form method="post" autoComplete="off" onSubmit={handleSubmit}>
              <div className="form-with-lable mb-5">
                <lable>Email</lable>
                <div className="input-box">
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                    value={values.email}
                  />
                </div>
                {touched.email && errors.email ? (
                  <div className="is_error">{errors.email}</div>
                ) : null}
              </div>
              <div className="form-with-lable mb-5">
                <lable>Password</lable>
                <div className="input-box">
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                    value={values.password}
                  />
                </div>
                {touched.password && errors.password ? (
                  <div className="is_error">{errors.password}</div>
                ) : null}
              </div>
              <div className="form-with-button text-center">
                <button className="">Sign In</button>
              </div>
            </form>
            <span className="auth-footer-head block w-full text-center text-black mt-3">
              Don't have an Acccount?{" "}
              <Link to={"/sign-up"} className="underline theme_txt">
                Sign UP
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="authentication-right">
        <div className="authentication-animation">
          <Lottie options={defaultOptions} height={800} width={800} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
