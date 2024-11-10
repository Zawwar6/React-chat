import React from 'react'
import "./List.css"
import Userinfo from "./Userinfo/Userinfo"
import ChatList from "./chatList/ChatList"
const List = () => {
  return (
    <div className='list'>
      <Userinfo/>
      <ChatList/>
    </div>
  )
}

export default List
