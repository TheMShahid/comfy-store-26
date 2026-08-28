import { Form, Link } from "react-router-dom";
import { FormInput, SubtmitBtn } from "../components";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-3xl text-center font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubtmitBtn text="login" />
        </div>
        <button type="button" className="btn uppercase btn-secondary btn-block">
          guest user
        </button>
        <p className="text-center">
          Not a member yet?{" "}
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize">
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
