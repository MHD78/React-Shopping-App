const FromCheckBox = ({ formik, name, label }) => {
  return (
    <div className=" mb-4">
      <input
        className="mr-1"
        type="checkbox"
        id={name}
        name={name}
        value={name}
        onChange={formik.handleChange}
        {...formik.getFieldProps(name)}
      />
      <label className="text-[11px] font-semibold" for={name}>
        {label}
      </label>
    </div>
  );
};

export default FromCheckBox;
