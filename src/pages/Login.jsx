import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubtmitBtn } from "../components";
import { customFetch } from "../utils";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("logged in successfully");
      return redirect("/");
      // return null
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  // for guest user
  const dispatch = useDispatch();
  const navigagte = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("welcome guest user");
      navigagte("/");
    } catch (error) {
      // const errorMessage = error?.response?.data?.error?.message;
      // toast.error(errorMessage);
      console.log(error);
      toast.error("guest user login error. please try again");
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-80 sm:w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-3xl text-center font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          // defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          // defaultValue="secret"
        />
        <div className="mt-4">
          <SubtmitBtn text="login" />
        </div>
        <button
          type="button"
          className="btn uppercase btn-secondary btn-block"
          onClick={loginAsGuestUser}>
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
