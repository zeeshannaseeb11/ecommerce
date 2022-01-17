import React from "react";
import Account from "../account/account";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";

const Header = () => {
  const link = [
    {
      props: "links",
      names: "Home",
      path: "/",
    },
    {
      props: "links",
      names: "Store",
      path: "/store",
    },
    {
      props: "links",
      names: "About",
      path: "#",
    },
    {
      props: "links",
      names: "Contact",
      path: "#",
    },

    {
      props: "links",
      names: "Account",
      path: "/account",
    },
  ];
  return (
    <div className="header-flex">
      <div className="header-image">
        <img src={Logo} className="logo-img" />
      </div>

      <div className="header-links">
        {link.map(({ props, names, path }) => {
          return (
            <Link to={path} className={props} key={names}>
              {names}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
