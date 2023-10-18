import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import ResponsiveDrawer from '../component1/ResponsiveDrawer';
import Header from './Header';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import AppsTwoToneIcon from '@mui/icons-material/AppsTwoTone';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import Pposts from './Pposts';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import explorePic1 from '../component2/pic/explorePic1.avif';
import explorePic2 from './pic/explorePic2.avif';
import explorePic3 from '../component2/pic/explorePic3.avif';
import explorePic4 from '../component2/pic/explorePic4.avif';
import explorePic5 from '../component2/pic/explorePic5.avif';
import explorePic6 from '../component2/pic/explorePic6.avif';
import explorePic7 from '../component2/pic/explorePic7.avif';
import explorePic8 from '../component2/pic/explorePic8 (1).avif';




function PageFour() {


  const [memories, setMemories] = useState([]);
  const [memories2, setMemories2] = useState([]);



  const [style,setStyle]=useState({
    borderTop:"solid 2px white ",
    borderRadius:"0%",
    fontWeight:"900",
    color:"white"
  })
  const [style1,setStyle1]=useState({
    borderTop:"",borderRadius:"",fontWeight:"",color:"#8d8d8d"
  })
  const [style2,setStyle2]=useState({
    borderTop:" ",borderRadius:"",fontWeight:"",color:"#8d8d8d"
  })
  





    const handelPost=()=>{

     const o={
      borderTop:"solid 2px white ",borderRadius:"0%",fontWeight:"900",color:"white"

     }
     const o2={
      borderTop:"",borderRadius:"",fontWeight:"",color:"#8d8d8d"

     }
     setStyle(o)
     setStyle1(o2)
     setStyle2(o2)



    

    setMemories2(memories)

    }



    const handelReels=()=>{

      const o={
       borderTop:"solid 2px white ",borderRadius:"0%",fontWeight:"900",color:"white"
 
      }
      const o2={
       borderTop:"",borderRadius:"",fontWeight:"",color:"#8d8d8d"
 
      }
      setStyle(o2)
      setStyle1(o)
      setStyle2(o2)
      const exploreItems = [{
        id:1,
        image:explorePic1,

       },
      {
       id:2,
       image:explorePic2,

      },
     {
      id:3,
      image:explorePic4,

     },
     {
      id:4,
      image:explorePic3,

   },
     {
       id:5,
      image:explorePic5,

     },
    {
     id:6,
     image:explorePic6,

   }, 
  {
        id:7,
         image:explorePic7,

     },
   {
    id:8,
   image:explorePic8,

      }
      ,
   {
    id:9,
   image:explorePic5,

      }

     ]

     setMemories2(exploreItems)
 
     }
     const handelTaggs=()=>{

      const o={
       borderTop:"solid 2px white ",borderRadius:"0%",fontWeight:"900",color:"white"
 
      }
      const o2={
       borderTop:"",borderRadius:"",fontWeight:"",color:"#8d8d8d"
 
      }
      setStyle(o2)
      setStyle1(o2)
      setStyle2(o)
      const exploreItems = [{
           id:1,
           image:explorePic1,

          },
         {
          id:2,
          image:explorePic2,

         },
        {
         id:3,
         image:explorePic4,

        },
        {
         id:4,
         image:explorePic3,

      },
        {
          id:5,
         image:explorePic5,

        },
       {
        id:6,
        image:explorePic6,

      }

        ]

        setMemories2(exploreItems)
     
    
 
     }

  const navigate=useNavigate("")
  useEffect(()=>{
 
 
    navigate("/four")
 
  },[])
  const token=localStorage.getItem("token");
  const ID=localStorage.getItem("id");
 
 
 
  useEffect(() => {
   axios.get(`http://16.170.173.197/posts/${ID}`, {
     headers: {
       Authorization: `Bearer ${token}`,
     },
   }).then((response) => {
    setMemories(response.data.posts)
    setMemories2(response.data.posts)
     
    
   }).catch((error) => {
     console.log("", error)
   })
 }, [])


//  const filteredMemories = memories.filter((memory) => memory.user.id === ID);



  return (
    <div style={{backgroundColor:"black"}}>
    
    
   
    <Grid container spacing={2}>
    <Grid item xs={2.5} >
    <ResponsiveDrawer s="solid 2px #1d1d1d"  /> 
    </Grid>

    <Grid item xs={7}  >
     
    <Header/>
    <div style={{marginLeft:"38%"}}>
    <Stack spacing={2} direction="row">
      <Button variant="text" style={{backgroundColor:"black",color:"black"}}>Text</Button>
      <Button onClick={handelPost} variant="contained" style={{backgroundColor:"black",color:style.color, borderTop:style.borderTop,borderRadius:style.borderRadius,fontWeight:style.fontWeight}}><AppsTwoToneIcon/>POSTS</Button>
      
   
      <Button   onClick={handelReels} variant="contained" style={{backgroundColor:"black",color:style1.color, borderTop:style1.borderTop,borderRadius:style1.borderRadius,fontWeight:style1.fontWeight}}><TurnedInNotOutlinedIcon/>REELS</Button>
      <Button   onClick={handelTaggs} variant="contained" style={{backgroundColor:"black",color:style2.color, borderTop:style2.borderTop,borderRadius:style2.borderRadius,fontWeight:style2.fontWeight}}><AssignmentIndOutlinedIcon/>TAGGED</Button>
    </Stack>
    <div className='gg' style={{marginLeft:"-30%",width:"700px"}}>



              {memories2.map((memory,index) => (

                <Pposts key={memory.id} Image={memory.image} id={memory.id} />
              ))}
              {/* {toReturn} */}
              {/* {console.log(toReturn)} */}
    </div>



    


    </div>



    </Grid>

  </Grid>
      
      </div>
  )
}

export default PageFour