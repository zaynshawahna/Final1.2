
import AvatarStack from "./AvatarStack";
import React, { useEffect, useState } from 'react';
import Post from "./Post";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Middel() {
 const token=localStorage.getItem("token");
 const ID=localStorage.getItem("id");
 const [memories, setMemories] = useState([]);
 const [ids, setIds] = useState([]);
const navigate=useNavigate()
const [memo,setMemo]=useState()
 useEffect(() => {
  axios.get("http://16.170.173.197/posts", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    setMemories(response.data.posts)
    // console.log(response.data.posts)
    // console.log(ID)
    const idLike = response.data.posts.filter((memory) => {
      
      return memory.likes.some((like) => like === ID);
    });
    const idlike2=idLike.map((like)=>like.id);
    // console.log(idlike2)
    // console.log(idLike);
    setIds(idlike2)

   
  }).catch((error) => {
    console.log("Error Fedching memories 4", error)
  })
}, [])







  return (
    <div style={{backgroundColor:"black",marginLeft:"5%"}}>
 
 <AvatarStack  />
 {memories.map((memory, index) => {
  const likeIcon = ids.includes(memory.id) ? "red" : "white";
  
  return (
    <Post
      key={memory.id}
      avatarImg={memory.user.avatar}
      authorName={memory.user.userName}
      image={memory.image}
      description={memory.description}
      likes={memory.likes.length}
      id={memory.id}
      likeIcon={likeIcon}
    />
  );
})}

    </div>
  )
}

export default Middel