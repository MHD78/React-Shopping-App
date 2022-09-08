import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required !")
    .email("Invalid Email adress !"),
  password: Yup.string()
    .required("Password is required !")
    .min(6, "Minimum password length is 6 character !"),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
  });

  return (
    <div
      className=" bg-left-bottom w-full bg-cover flex "
      style={{
        backgroundImage: `url(https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=1380&t=st=1662465083~exp=1662465683~hmac=16599bdebc2cc3c50a3ee9827471a20676e17a12176402fff43cbe78839a703e)`,
      }}
    >
      <form
        onSubmit={formik.submitForm}
        className="flex flex-col self-center my-6 mx-auto lg:ml-64  items-center gap-3 bg-white p-8 max-w-fit rounded-lg sha shadow-[15px_15px_4px_0px_rgba(0,0,0,0.2)] "
      >
        <h2 className="text-xl font-semibold mb-6 ">Welcome Back</h2>
        <div className="flex flex-col gap-2 ">
          <label className="text-sm font-semibold">Email Adress</label>
          <input
            className={`outline outline-1 ${
              formik.errors.email && formik.touched.email
                ? "outline-red-500"
                : "outline-gray-500"
            }  w-64 rounded-lg py-0.5 px-2 `}
            type="text"
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="text-xs text-red-500 ">{formik.errors.email}</div>
          )}
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="text-sm font-semibold">Password</label>
          <input
            className={`outline outline-1 ${
              formik.errors.password && formik.touched.password
                ? "outline-red-500"
                : "outline-gray-500"
            }  w-64 rounded-lg py-0.5 px-2 `}
            type="text"
            name="password"
            {...formik.getFieldProps("password")}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="text-xs text-red-500">{formik.errors.password}</div>
          )}
        </div>
        <button className="w-full  text-sm px-10 py-1.5 bg-[#FAC641] hover:bg-[#fab401] transition-colors duration-400 rounded-lg font-semibold mt-5">
          Login
        </button>

        <p className="text-sm font-semibold my-5 ">Or</p>
        <button className="flex items-center w-full gap-2  text-sm px-10 py-1.5 bg-[#FAC641] hover:bg-[#fab401] transition-colors duration-400 rounded-lg font-semibold">
          <AiOutlineGoogle className="text-lg" />
          Login with Google
        </button>
        <p className="text-sm self-start mx-auto">
          Don't have an account yet ?{" "}
          <Link to={"/sign-up"} className="text-orange-500 font-semibold">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
