import React from "react";
import design1 from "../../assets/img/design-01.jpeg";
import design2 from "../../assets/img/design-02.jpeg";
import design3 from "../../assets/img/design-03.jpeg";
const Home = () => {
  return (
    <>
      <section className="hero-section flex container">
        <div className="hero__content flex">
          <div className="hero__line"></div>
          <h3 className="hero__secd-title">Best Quality Products</h3>
          <h1 className="hero__title">We Print What You Want!</h1>
          <p className="hero__desc">
            Click edit button to change the text. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
          <div className="btn__container">
            <a href="#" className="btn hero__btn">
              Get Started
              <i className="fas fa-angle-right"></i>
            </a>
          </div>
        </div>

        <div className="hero__img"></div>
      </section>
      {/* // Design section */}
      <section className="designs flex container">
        <div className="designs__cont flex">
          <div className="designs__info">
            <p className="designs__desc">Most Loved Designs</p>
            <h4 className="designs__title">Customize Your T-Shirts</h4>
          </div>
          <img
            className="designs__img"
            src={design1}
            alt="girl wearing black shirt showcasing Most loved designs"
          />
        </div>

        <div className="designs__cont">
          <div className="designs__info">
            <p className="designs__desc">Design of the Week</p>
            <h4 className="designs__title">Rubber Print Your T-Shirt</h4>
          </div>
          <img
            className="designs__img"
            src={design2}
            alt="Boy wearing rubber printed shirt showcasing design of the week"
          />
        </div>

        <div className="designs__cont flex">
          <div className="designs__info">
            <p className="designs__desc">New T-shirt Edition</p>
            <h4 className="designs__title">Customize Plain Colors</h4>
          </div>

          <img
            className="designs__img"
            src={design3}
            alt="girl wearing black and yellow contrast shirt showcasing customize plain colors "
          />
        </div>
      </section>
    </>
  );
};

export default Home;
