import * as React from 'react';
import Grid from '@mui/material/Grid';
import inst from "./inst.png";
import Img from "../component1/pic/Img.png";
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';




function PageFive() {

  const navigate=useNavigate("");

  
  useEffect(()=>{
 
 
    navigate("/")
 
  },[])


  const [user, setUser] = useState({
    email: "",
  
    password: ""
  });

  function submitTo(e){
    
    e.preventDefault();
console.log(user)
    axios.post("http://16.170.173.197/users/login",user)
    .then((response)=>{

      
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("id",response.data.user.id)
        localStorage.setItem("userName",response.data.user.userName)
        localStorage.setItem("avatar",response.data.user.avatar)
        localStorage.setItem("bio",response.data.user.bio)
        localStorage.setItem("followers",response.data.user.followers)
        localStorage.setItem("following",response.data.user.following)
        localStorage.setItem("posts",response.data.user.posts.length)
       
        navigate("/one");
    })
    .catch(error=>{
    console.log(error)
    
      
    })


    
  }
  return (
    <div style={{backgroundColor:"black"}}>

  <Grid container spacing={2}>
  <Grid  item xs={7} >

    <img src={inst} style={{width:"40%",height:"70%",margin:"13%",paddingLeft:"30%"}}/>
  </Grid>
  <Grid item xs={5}  >

  <div style={{backgroundColor:"#1d1d1d",marginRight:"40%",marginTop:"20%",borderRadius:"10px"}} >
  <form onSubmit={submitTo}>
  
    <img src={Img} style={{width:"35%",height:"35%",marginTop:"5%",marginBottom:"5%"}}/>
    <br>
    </br>
    <input  type="email" onChange={(e)=>{
      setUser({...user,email:e.target.value})

    }} value={user.email} style={{ width: "90%", height: "30px", borderRadius: "5px",color:'#8d8d8d',fontWeight:"600",fontFamily:"Poppins" }}placeholder='Mobole Number or Email'></input>
    <br></br>
    <br>
    </br>
    <input type="password" value={user.password}  onChange={(e)=>{
      setUser({...user,password:e.target.value})

    }}  style={{ width: "90%", height: "30px", borderRadius: "5px",color:'#8d8d8d',fontWeight:"600",fontFamily:"Poppins" }}placeholder='Password'></input>
    <br></br>
    <br></br>
    
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button variant="contained" disableElevation style={{width: "90%", height: "30px",borderRadius:"5px",textTransform: "none",fontWeight:"600",fontFamily:"Poppins" }}  type="submit">
     Login
      </Button>
   
      <br></br>
      <br></br>
    </div>
    <div>
      <Stack direction="row">

      <hr style={{
      
      height: "1px",
      backgroundColor: '#8d8d8d',
      border:"none",
      width:"36%"
      
     

    }}></hr>
      <span style={{
      
     color:'#8d8d8d',
     fontWeight:"100"
    }}>
Or     
     </span>
      <hr style={{
      
      height: "1px",
      backgroundColor: '#8d8d8d',
      border:"none",
      width:"36%"
      
     

    }}></hr>
      </Stack>
      <br></br>
      <a href="https://www.facebook.com/login" target='_blank'>      <Button variant="contained" disableElevation style={{width: "90%", height: "30px",borderRadius:"5px",textTransform: "none",fontWeight:"600",fontFamily:"Poppins" }} >
      <FaFacebook style={{marginRight:"10px"}}   /> 
Login with Facebook
      </Button></a>

      <br>
      </br>
      <br>
      </br>
      
      <div style={{color:'#8d8d8d'}}>
        Forgot password?
        
      </div>



      </div>
   

</form>

<br></br>

</div>
<div style={{backgroundColor:"#1d1d1d",marginRight:"40%",marginTop:"5%",borderRadius:"10px",height:"10%"}} >
  <br></br>
 <span style={{color:'#8d8d8d',margin:"10%"}}>Don't have an acount? <Link to="/signUp" style={{ textDecoration: "none", color: "#3483eb",fontWeight:"900" }}>Sign Up</Link>   </span>

<br></br>

</div>




    

  </Grid>
</Grid>
    
    </div>
  )
}

export default PageFive