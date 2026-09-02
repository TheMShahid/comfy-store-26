import { Filters, ProductsContainer, PaginationContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";

export const Loader = async ({ request }) => {
  // console.log(request);

  // const params = new URL(request.url).searchParams;
  // console.log(params.get("search"));

  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  // console.log(params);

  const response = await customFetch(url, {
    params,
  });
  // console.log(response.data);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
