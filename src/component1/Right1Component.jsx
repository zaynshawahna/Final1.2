import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { Link, Stack } from '@mui/material';

function Right1Component({ name, avatar,linkk,name2}) {

  const[link,setLink]=useState(linkk)


  const handelFollow=()=>{

    if(link==="Follow")
    setLink("Following")
    if(link==="Following")
    setLink("Follow")

  }
  return (
    <>
<div style={{ display: "flex", alignItems: "center",marginBottom:"5px" }}>


  <Avatar alt="Remy Sharp" src={avatar} sx={{ width: 60, height: 60, margin: "10px" }} />
  <Stack direction="column" style={{ marginRight: "auto" }}>
  <span style={{ marginRight: "auto" }}>{name}</span>
  <span style={{color:"#8d8d8d"}}>{name2}</span>
  </Stack>
  <Link style={{ marginLeft: "10px", cursor: "pointer" }} onClick={handelFollow}>{link}</Link>

 

</div>


       
       
       </>
  )
}

export default Right1Component