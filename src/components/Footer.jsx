import React from 'react';
import { Footer as StyledFooter } from '../styles/Styles';

export default function Footer() {
  return (
    <StyledFooter>
      <footer className='page-footer font-small elegant-color'>
        <div className='footer-copyright text-center py-3'>
          © {new Date().getFullYear()} Copyright:
          <a href='https://ls-umts.netlify.com/' className='pl-3'>
            utms
          </a>
        </div>
      </footer>
    </StyledFooter>
  );
}
