import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Store = ({ email }) => {
  if (email) {
    return (
      <>
        {/* <h1 className="storelog">Store</h1> */}
        <section className="hero-section flex container">
          <div className="store__img"></div>
          <div className="hero__content flex">
            <div className="hero__line"></div>
            <h3 className="store__secd-title">Best Quality Products</h3>
            <h1 className="store__title">Welcome to the store!</h1>
            <p className="hero__desc">
              Click edit button to change the text. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
            <div className="btn__container">
              <Link to="/addproducts" className="btn hero__btn">
                Add Product
                {/* <i className="fas fa-angle-right"></i> */}
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }
  return <h2 className="storelog">Not Logged in</h2>;
};

const MapStateToProps = (state) => {
  return {
    email: state.auth.email,
  };
};

export default connect(MapStateToProps, null)(Store);
