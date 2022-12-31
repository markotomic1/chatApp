import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContenxt";
import { ChatContext } from "../context/ChatContext";

const Message = ({ msg }) => {
  const currentUser = useContext(AuthContext);

  const { data } = useContext(ChatContext);
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);
  return (
    <div
      ref={ref}
      className={`message ${msg.senderId === currentUser.uid && "owner"}`}
    >
      <div className='messageInfo'>
        <img
          src={
            msg.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=''
        />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>{msg.text}</p>
        {msg.img && <img src={msg.img} alt='' />}
      </div>
    </div>
  );
};

export default Message;
