import React from 'react';

// using the same sass file for the
import '../../styles/components/_nav.scss';

// import { useState } from 'react';

import { hrefLinks } from '../../utils/navProps';

function Nav() {
  return (
    <nav className='nav-section'>
      <h1 className='header-title'>Clide</h1>
      <ul className='icon-btn-section'>
        {hrefLinks.map((hrefProps) => (
          <button
            aria-label='social media circle buttons'
            type='button'
            className={hrefProps.buttonClassName}
            key={hrefProps}
          >
            <a
              aria-hidden
              className={hrefProps.iconClassName}
              href={hrefProps.link}
              rel={hrefProps.rel}
              target={hrefProps.target}
            >
              <p className={hrefProps.anchorClassName}>{hrefProps.content}</p>
            </a>
          </button>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
