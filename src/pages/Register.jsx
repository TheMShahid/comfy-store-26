import { Form, Link } from "react-router-dom";
import { FormInput, SubtmitBtn } from "../components";

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" name="username" label="username" />
        <FormInput type="email" name="email" label="email" />
        <FormInput type="password" name="password" label="password" />
        <div className="mt-4">
          <SubtmitBtn text="Register" />
        </div>
        <p className="text-center">
          Already member?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize">
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
