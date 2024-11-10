import { collection, getDoc, query, where } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../../../../lib/firebase';


const Adduser = () => {
  const [user,setUser] = useState(null);
  const handlSearch = async (e) =>{
    e.preventDefault()

    const formData = new FormData(e.target);
    const username = formData.get("username")

    try {
      const  userRef = collection(db,"users");
      const q = query(userRef, where ("username", "==" ,"username",username))

      const querySnapShot = await getDoc(q);

      if(!querySnapShot.empty){
     setUser(querySnapShot.docs[0].data())
      } 

    } catch (err) {
      console.log(err);
      
    }
  }
  return (
    <div className="addUser">
    <form onSubmit={handlSearch}>
      <input type="text" placeholder="Username" name="username" />
      <button>Search</button>
    </form>
    {user && (
      <div className="user">
        <div className="detail">
          <img src={user.avatar || "./avatar.png"} alt="" />
          <span>{user.username}</span>
        </div>
        <button onClick={handleAdd}>Add User</button>
      </div>
    )}
  </div>
  )
}

export default Adduser