import { Outlet } from "react-router-dom";

// import Header from "./header";
import Field from "./hero";

const Layout = () => {
  return (
    <>
      <Field />
      <Outlet />
    </>
  );
};

export default Layout;
