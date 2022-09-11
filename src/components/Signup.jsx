import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineGoogle } from "react-icons/ai";
import { BiCheckbox } from "react-icons/bi";
import { Link } from "react-router-dom";
import FormInput from "../common/FormInput";
import FromCheckBox from "../common/FormCheckBox";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required !")
    .email("Invalid Email adress !"),
  password: Yup.string()
    .required("Password is required !")
    .min(6, "Minimum password length is 6 character !"),
  // .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d]{8,}$/),
  confirmPassword: Yup.string("Confirm your password !")
    .required("Confirm Password is required!")
    .oneOf([Yup.ref("password"), null], "Passwords dosent match!"),
  term: Yup.boolean().required("terms is required !"),
});

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
    validationSchema,
    validateOnMount: "true",
  });
  console.log(formik.values);
  return (
    <div
      className=" bg-left-bottom w-full bg-cover flex "
      style={{
        backgroundImage: `url(https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?w=1380&t=st=1662465083~exp=1662465683~hmac=16599bdebc2cc3c50a3ee9827471a20676e17a12176402fff43cbe78839a703e)`,
      }}
    >
      <form
        onSubmit={formik.submitForm}
        className="flex flex-col self-center my-20  mx-auto lg:ml-64  items-center gap-3 bg-white p-8 max-w-fit rounded-lg sha shadow-[15px_15px_4px_0px_rgba(0,0,0,0.2)] "
      >
        <h2 className="text-xl font-semibold">Create An Account</h2>
        <button className="flex items-center w-full gap-2  text-sm px-10 py-1.5 bg-[#FAC641] hover:bg-[#fab401] transition-colors duration-400 rounded-lg font-semibold my-4">
          <AiOutlineGoogle className="text-lg" />
          Sign up with Google
        </button>
        <p className="text-sm font-semibold">Or</p>
        <FormInput formik={formik} label={"Email Adress"} name={"email"} />
        <FormInput
          formik={formik}
          label={"Password"}
          name={"password"}
          type={"password"}
        />
        <FormInput
          formik={formik}
          label={"Confirm Password"}
          name={"confirmPassword"}
          type={"password"}
        />
        <FromCheckBox
          name={"term"}
          formik={formik}
          label={"I agree to terms of service and privacy statements"}
        />
        <button
          disabled={!formik.isValid}
          className=" disabled:text-zinc-500 w-full  text-sm px-10 py-1.5 bg-primary hover:bg-hoverPrimary transition-colors duration-400 rounded-lg font-semibold"
        >
          Sign up
        </button>
        <p className="text-sm self-start mx-auto">
          Alredy have an account ?
          <Link className="text-orange-500 font-semibold" to={"/login"}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
