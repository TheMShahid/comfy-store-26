import { useLoaderData, Link } from "react-router-dom";
import { formatePrice } from "../utils";

const ProductsList = () => {
  const { products } = useLoaderData();
  // console.log(products);

  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { title, price, company, image } = product.attributes;
        const dollarAmount = formatePrice(price);
        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4   flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group ">
            <img
              src={image}
              alt={title}
              className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="ml-0 sm:ml-16">
              <h3 className="capitalize text-lg font-medium">{title}</h3>
              <h4 className="capitalize text-md text-green-600">{company}</h4>
            </div>
            <p className="font-medium ml-0 sm:ml-auto text-lg">
              {dollarAmount}
            </p>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsList;
