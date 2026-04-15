import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoHome } from 'react-icons/io5';
import { RiTimeLine } from 'react-icons/ri';
import { Link } from 'react-router';

const Navbar = () => {

    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-2xl">Keen Keeper</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li className='text-xl'><Link to="/"><IoHome></IoHome> Home</Link></li>
      <li  className='text-xl'><Link to="/timeline"><RiTimeLine></RiTimeLine> Timeline</Link></li>
      <li  className='text-xl'><Link to="/stats"><ImStatsDots></ImStatsDots> Stats</Link></li>
      
    </ul>
  </div>
</div>
    );
};

export default Navbar;