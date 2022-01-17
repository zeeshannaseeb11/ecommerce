import React from "react";
import footerLogo from "../../assets/img/footer-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container flex">
        <div className="col-1">
          <a href="./index.html">
            <img className="footer__logo" src={footerLogo} alt="footer-logo" />
          </a>

          <h2 className="footer__title">Custom Print Store</h2>
          <div className="social__media">
            <ul className="social__media-container flex">
              <li>
                <a className="social-media__links" href="#">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a className="social-media__links" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>

              <li>
                <a className="social-media__links" href="#">
                  <i className="fab fa-instagram-square"></i>
                </a>
              </li>
              <li>
                <a className="social-media__links" href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-2">
          <h2 className="footer__title">
            Get in Touch with Us for the Best Quality Custom Prints & Supplies.
          </h2>
          <p className="footer__desc">
            Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit,
            sed quia non numquam eius modi tempora incidunt lores ta porro ame.
          </p>
        </div>
        <div className="col-3">
          <h2 className="footer__title">Quick Links</h2>
          <ul>
            <li>
              <a className="footer__link" href="#">
                Know More About Us
              </a>
            </li>
            <li>
              <a className="footer__link" href="#">
                Visit Store
              </a>
            </li>
            <li>
              <a className="footer__link" href="#">
                Let's Connect
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h3 className="footer__title">Important Links</h3>
          <ul>
            <li>
              <a className="footer__link" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="footer__link" href="#">
                Shipping Details
              </a>
            </li>
            <li>
              <a className="footer__link" href="#">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="horizontal-sperator"></div>

      <div className="footer-bottom flex container">
        <p>copyright &copy 2022</p>
        <p>NextCasuals</p>
      </div>
    </footer>
  );
};

export default Footer;
