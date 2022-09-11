const FormInput = ({ label, formik, name, type = "text" }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <label className="text-sm font-semibold">{label}</label>
      <input
        className={`outline outline-1 ${
          formik.errors[name] && formik.touched[name]
            ? "outline-red-500"
            : "outline-gray-500"
        }  w-64 rounded-lg py-0.5 px-2 `}
        type={type}
        name={name}
        {...formik.getFieldProps(name)}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-xs text-red-500 ">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default FormInput;
