import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">

      <div className="inner-footer">

        <p className="footerContent">
          <div className="logo">
            <img
              src="https://i.pinimg.com/originals/b1/7d/73/b17d737dffa5f3dbc75edcbd952a981d.jpg"
              alt="logo"
            />
          </div>
            Copyright &copy; 2021 JAMin Out <br />
          <a
            href="https://www.facebook.com"
            target="Facebook"
          ><i className="facebook"></i
          >Facebook</a>
          <a href="https://twitter.com" target="Twitter"><i className="twitter"></i>Twitter</a>
          <a
            href="https://www.instagram.com" target="Instagram" ><i className="instagram"></i>Instagram</a>
        </p>
        <br />
      </div>

    </footer>
  );
};

export default Footer;