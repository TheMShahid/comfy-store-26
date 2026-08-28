const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <fieldset className="fieldset">
      <label className="label capitalize" htmlFor="name">
        {label}
      </label>
      <input
        type={type}
        id="name"
        name={name}
        className="input"
        defaultValue={defaultValue}
      />
    </fieldset>
  );
};
export default FormInput;
