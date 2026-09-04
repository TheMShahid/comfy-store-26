import { Link } from "react-router-dom";
import { CartItemsList, CartTotals, SectionTitle } from "../components";
import { useSelector } from "react-redux";

const Cart = () => {
  // temp
  const user = useSelector((state) => state.userState.user);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 gap-8 grid lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              proceed to checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary w-full mt-8">
              Please Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
