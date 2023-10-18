import React from 'react'
import Avatar from '@mui/material/Avatar';

import { Stack } from '@mui/material';



function StoryAvatare({avatar,authorName}) {

 
  return (
    <>
<Stack direction="column">
<Avatar alt="Remy Sharp" src={avatar}  sx={{ width: "60px", height: "60px",marginLeft:"10%",borderRadius:"50%",border:"solid 3px #874c82",color:"white" }}/>
<span style={{color:'white',fontSize:"110%"}}>
             
             {authorName}
              
      </span>
</Stack>

    </>
  )
}

export default StoryAvatare