import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContenxt";
import { ChatContext } from "../context/ChatContext";

const Message = ({ msg }) => {
  const currentUser = useContext(AuthContext);

  const { data } = useContext(ChatContext);
  return (
    <div className='message'>
      <div className='messageInfo'>
        <img
          src='https://images.pexels.com/photos/10288854/pexels-photo-10288854.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          alt=''
        />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>hello</p>
        <img
          src='https://images.pexels.com/photos/10288854/pexels-photo-10288854.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          alt=''
        />
      </div>
    </div>
  );
};

export default Message;
