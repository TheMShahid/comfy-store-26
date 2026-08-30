import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils/";

const url = "/products?featured=true";

export const Loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  );
};
export default Landing;
