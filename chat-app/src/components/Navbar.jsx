import { signOut } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContenxt";
import { auth } from "../firebase";

const Navbar = () => {
  const currentUser = useContext(AuthContext);
  return (
    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className='user'>
        <img
          src='https://images.pexels.com/photos/10288854/pexels-photo-10288854.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          alt=''
        />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
