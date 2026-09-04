import { useLoaderData, Link } from "react-router-dom";
import { customFetch, formatePrice, generateAmountOptions } from "../utils";
import { useState } from "react";
import { addItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

export const Loader = async ({ params }) => {
  const response = await customFetch.get(`/products/${params.id}`);
  // console.log(response);

  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();

  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatePrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    // console.log(e.target);
    // console.log(e.target.value);
    // console.log(parseInt(e.target.value));

    setAmount(parseInt(e.target.value));
  };

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    company,
    productColor,
    description,
    amount,
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section>
      {/* BREADCRUMBS */}
      <div className="text-muted breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-green-600 font-bold mt-2">{company}</h4>
          <p className="text-xl mt-3 cursor-pointer">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS */}
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    type="button"
                    key={color}
                    style={{ background: color }}
                    className={`badge cursor-pointer btn-circle w-6 h-6 mr-2 ${color === productColor && "border-2 border-secondary"}`}
                    onClick={() => setProductColor(color)}></button>
                );
              })}
            </div>
          </div>
          {/* AMOUNT */}
          <div className="form-controll w-full max-w-xs mt-5">
            <label htmlFor="amount" className="label">
              <h4 className="text-md font-medium tracking-wider capitalize mb-2">
                amount
              </h4>
            </label>
            <select
              id="amount"
              className="select select-secondary outline-none select-md"
              value={amount}
              onChange={handleAmount}>
              {generateAmountOptions(10)}
            </select>
          </div>
          {/* CART BTN */}
          <div className="mt-10">
            <button className="btn btn-secondary btn-md" onClick={addToCart}>
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
