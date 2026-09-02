const FormCheckbox = ({ name, size, label, defaultValue }) => {
  return (
    <div className="form-control text-center items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <br />
      </label>
      <br />
      <input
        type="checkbox"
        name={name}
        id={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  );
};
export default FormCheckbox;
