import { Filters, ProductsContainer, PaginationContainer } from "../components";
import { customFetch } from "../utils";
const url = "/products";

const allProductsQuery = (queryParams) => {
  const { search, category, price, company, sort, shipping, page } =
    queryParams;

  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      price ?? "100000",
      company ?? "all",
      shipping ?? false,
      sort ?? "a-z",
      page ?? 1,
    ],
    queryFn: () =>
      customFetch(url, {
        params: queryParams,
      }),
  };
};

export const Loader =
  (queryClient) =>
  async ({ request }) => {
    // console.log(request);

    // const params = new URL(request.url).searchParams;
    // console.log(params.get("search"));

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    // console.log(params);

    const response = await queryClient.ensureQueryData(
      allProductsQuery(params),
    );
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
