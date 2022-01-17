import React from "react";
import { Routes, Route, Link } from "react-router";
import Account from "./components/account/account";
import Header from "./components/header/header";
import Home from "./components/home";
import Store from "./components/store/store";
import AddProduct from "./components/addProduct";
import Footer from "./components/footer/footer";
import { Provider } from "react-redux";
import store from "./components/redux/store";

const App = () => {
  return (
    <div>
      <>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/store" element={<Store />} />
            <Route path="/addproducts" element={<AddProduct />} />
          </Routes>
          <Footer />
        </Provider>
      </>
    </div>
  );
};

export default App;
