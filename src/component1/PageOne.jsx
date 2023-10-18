import React, { useEffect } from 'react';
import ResponsiveDrawer from "./ResponsiveDrawer";
import Grid from '@mui/material/Grid';
import Right1 from "./Right1";
import Middel from './Middel';
import { useNavigate } from 'react-router-dom';


function PageOne() {

  

  const navigate=useNavigate("")

 useEffect(()=>{


   navigate("/one")

 },[])

  return (
    <div style={{backgroundColor:"black"}}>
    
    
  
  <Grid container spacing={2}>

  <Grid item xs={2.5} >
  <ResponsiveDrawer   /> 
  </Grid>
  <Grid item xs={5}  >

   <Middel />
  <br>
 </br>
  <br>
 </br>
  <br>
</br>
  </Grid>
  <Grid item xs={4}>
    <Right1/>

  
  </Grid>
</Grid>
    
    </div>
  )
}

export default PageOne