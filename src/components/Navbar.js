import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import imgAvatar from '../assets/image-avatar.png';
import { links } from '../utils';

const Navbar = () => {
  //
  const currentPath = window.location.pathname;
  const [activeBtn, setActiveBtn] = useState(currentPath);
  useEffect(() => {
    setActiveBtn(currentPath);
  }, [currentPath]);

  return (
    <nav className='navbar'>
      <Link to='/' className='nav-logo-img'>
        <img src={logo} alt='logo' />
      </Link>
      <div className='nav-links'>
        {links.map((item) => {
          return (
            <Link
              to={item.url}
              key={item.id}
              onClick={() => setActiveBtn(item.url)}
              className={
                activeBtn === item.url
                  ? 'nav-icon-link active-nav-icon'
                  : 'nav-icon-link'
              }
            >
              <span className='nav-icon'>{item.icon}</span>
            </Link>
          );
        })}
      </div>

      <img className='nav-avatar-img' src={imgAvatar} alt='avatar' />
    </nav>
  );
};

export default Navbar;
