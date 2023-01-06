// using the same sass file for the
import '../styles/partials/_hero.scss';
import { useState } from 'react';
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
      <div className='menu-icon-section' onClick={handleClick}>
        <i
          className={
            clicked
              ? 'lni lni-cross-circle menu-icon'
              : 'lni lni-menu menu-icon'
          }
        ></i>
        <h1 className='header-title'>Clide</h1>
      </div>
    </nav>
  );
};

export default Nav;
