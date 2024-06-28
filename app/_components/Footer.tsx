import React from 'react';
import './scss/Footer.scss';
import Image from 'next/image';
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Image className="logo" src="/images/salinkaLogo.png" alt="logo"/>
        <p>© 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
