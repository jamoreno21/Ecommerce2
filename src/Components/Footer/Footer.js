import React from 'react'
import './Footer.module.css'

const Footer = () => {
  return (
    <footer className="footer-container">

      <div className="inner-footer">

        <p className="footerContent">
          <div className="logo">
            <img
              src="..."
              alt="logo"
            />
          </div>
            Copyright &copy; 2020 JAMin out Inc. <br />
          <a
            href="https://www.facebook.com"
            target="Facebook"
          >facebook<i className="facebook"></i
          >Facebook</a>
          <a href="https://twitter.com" target="Twitter"><i className="twitter"></i>Twitter</a>
          <a
            href="https://www.instagram.com" target="Instagram" >instagram<i className="instagram"></i>Instagram</a>
        </p>
        <br />
      </div>

    </footer>
  );
};

export default Footer;