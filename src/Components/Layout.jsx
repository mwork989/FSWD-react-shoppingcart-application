import { Provider } from "react-redux";
import Navigation from "./Navigation";
import store from "../Store/store";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Provider store={store}>
        <Navigation />
        <Outlet />
      </Provider>
    </>
  );
};

export default Layout;
