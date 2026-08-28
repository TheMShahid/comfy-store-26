import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <nav>
        <span className="text-3xl text-primary ">comfy</span>
      </nav>
      <Outlet />
    </>
  );
};
export default HomeLayout;
