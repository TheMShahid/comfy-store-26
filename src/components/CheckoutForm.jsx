import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { customFetch, formatePrice } from "../utils";
import { clearCart } from "../features/cart/cartSlice";

export const action =
  (store, queryClient) =>
  async ({ request }) => {
    // console.log(store);
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    // console.log(user);

    const { cartItems, numItemsInCart, orderTotal } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatePrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      const response = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
      // console.log(response);
      queryClient.removeQueries(["orders"]);
      store.dispatch(clearCart());
      toast.success("order placed successfully");
      return redirect("/orders");
    } catch (error) {
      // console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error placing you order";
      // console.log(errorMessage);
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect("/login");
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl capitalize">shipping information</h4>
      <FormInput label="first name" name="name" type="text" size="w-full" />
      <FormInput label="address" name="address" type="text" size="w-full" />
      <div className="mt-4">
        <SubmitBtn text="place your order" />
      </div>
    </Form>
  );
};
export default CheckoutForm;
