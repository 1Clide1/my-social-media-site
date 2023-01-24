import React from 'react';

function Footer() {
  return (
    <footer className='footer-section'>
      <p className='footer-text'>Made By</p>
      <a
        className='footer-anchor'
        href='https://github.com/1Clide1?tab=repositories'
        rel='noopener noreferrer'
        target='_blank'
      >
        <p className='footer-text footer-anchor-text'>@Clide</p>
      </a>
    </footer>
  );
}

export default Footer;
