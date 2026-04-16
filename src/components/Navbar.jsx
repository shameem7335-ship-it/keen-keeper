import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { IoHome } from 'react-icons/io5';
import { RiTimeLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-2xl"><span className='font-bold'>Keen</span>Keeper</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li className='text-xl'><NavLink className={({isActive}) => isActive ? "bg-black text-white" : ""} to="/"><IoHome></IoHome> Home</NavLink></li>
      <li  className='text-xl'><NavLink className={({isActive}) => isActive ? "bg-black text-white" : ""}  to="/timeline"><RiTimeLine></RiTimeLine> Timeline</NavLink></li>
      <li  className='text-xl'><NavLink className={({isActive}) => isActive ? "bg-black text-white" : ""}  to="/stats"><ImStatsDots></ImStatsDots> Stats</NavLink></li>
      
    </ul>
  </div>
</div>
    );
};

export default Navbar;