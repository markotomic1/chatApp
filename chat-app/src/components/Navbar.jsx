import React from "react";

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className='user'>
        <img
          src='https://images.pexels.com/photos/10288854/pexels-photo-10288854.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          alt=''
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
