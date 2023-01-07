// using the same sass file for the
import '../../styles/partials/_hero.scss';

import { useState } from 'react';

import { hrefLinks } from '../../utils/navProps';

const Nav = () => {
  // setting the state of the mobile navbar menu
  const [clicked, setClick] = useState(false);
  const handleClick = () => {
    setClick(!clicked);
  };
  // if you click a element in the nav then the menu would close after
  const closeMenu = () => {
    setClick(!clicked);
  };
  return (
    <nav className='nav-section'>
      <div className='menu-icon-section'>
        <button
          type='button'
          className='nav-btn menu-icon'
          onClick={handleClick}
        >
          <i
            className={
              clicked
                ? 'lni lni-cross-circle menu-icon'
                : 'lni lni-menu menu-icon'
            }
          ></i>
        </button>
        <h1 className='header-title'>Clide</h1>
        <ul className='icon-btn-section'>
          {hrefLinks.map((item, index) => {
            return (
              <button
                type='button'
                className='icon-btn'
                key={index}
                onClick={closeMenu}
              >
                <a className={item.cName} href={item.link}></a>
              </button>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
