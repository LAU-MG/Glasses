import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header>
      <div className="container-fluid bg-light">
        <div className="row align-items-center py-3">
          <div className="col-md-3 text-center">
            <img className="logo img-fluid" src="/images/salinkaLogo.png" alt="logo" />
          </div>
          <div className="col-md-12 col-lg-9"> {/* Modifiez la classe ici */}
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
