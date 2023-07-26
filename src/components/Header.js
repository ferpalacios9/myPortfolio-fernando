import React from 'react';
//link
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-4'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a className='text-gradient text-sm' href='#'>
            Developed with React & Tailwind CSS
          </a>
          {/* button */}
          <Link
                to='contact'
                smooth={true}
                className='block'>
                <button className='btn btn-sm'>Work with me</button>
              </Link>
        </div>
      </div>
    </header>
  )
};

export default Header;
