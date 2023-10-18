import React from 'react';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import ResponsiveDrawer from '../component1/ResponsiveDrawer';

function SearchPage() {

    const [name, setName] = useState('');
    const [color, setColor] = useState('black');
    const [toShow, setToShow] = useState();
    const token = localStorage.getItem("token");

    function handelSearch(){
        setColor("#8d8d8d")
        axios.get("http://16.170.173.197/users",token).then((response) => {
   
      
       const filteredMemories = response.data.users.filter((memory) => memory.userName === name);


     if(!(filteredMemories[0].userName === "") && !(filteredMemories[0].avatar === ""))
     setToShow(    <Stack  direction="row" spacing={2} style={{marginLeft:"10%"}}>
     <Avatar alt="Remy Sharp" src={filteredMemories[0].avatar}  sx={{ width: "60px", height: "60px",marginLeft:"10%",borderRadius:"50%",border:"solid 3px #874c82",color:"white" }}/>
 <span style={{color:'white',fontSize:"110%",marginTop:"2%"}}>
              
              {filteredMemories[0].userName}
               
       </span>
       <Link style={{  cursor: "pointer",marginTop:"2%",marginLeft:"50px",textDecoration:"none"}} >Follow</Link>
     </Stack>)
 

        
      }).catch((error) => {
        console.log("Error Fetching memories 2", error);
      });


    }




    const handleDescriptionChange = (event) => {
        setName(event.target.value);
    };
  return (
<div style={{
  backgroundColor: "black",
  width: "100%",
 height: "5000px",
  margin: 0,
  padding: 0,
  color:"white"
}}>
  <Grid container spacing={2}>

<Grid item xs={2.5} >
<ResponsiveDrawer   /> 
</Grid>
<Grid item xs={2} >

</Grid>
<Grid item xs={3}  >
<Stack direction="column" style={{marginTop:"100px"}}>

  <label style={{ fontFamily: "Poppins", fontWeight: "900", textAlign: "center" }}>search for users</label><br />
  <form >
  <input
              value={name}
              onChange={handleDescriptionChange}
  style={{ fontFamily: "Poppins", fontWeight: "900",borderRadius:"10px",height:"30px",textAlign: "center",width:"100%",border:"solid 4px #8d8d8d" }} placeholder='Enter User Name' />

  <br></br>
  <br></br>
  <br></br>
            <Button
            onClick={handelSearch}
              variant="contained"
              component="span"
              sx={{
                fontFamily: 'Poppins',
                width: '50%',
                textAlign: 'left',
                fontWeight: 900,
                marginBottom: '5px',
                paddingTop: '5px',
                paddingBottom: '5px',
                borderRadius: '10px',
                fontSize: '14px',
                color: 'white',
                backgroundColor: '#1F4172',
                ':hover': {
                  bgcolor: 'white',
                  color: 'black',
                },
                '&:active': {
                  boxShadow: 'none',
                  backgroundColor: 'white',
                  color: 'black',
                },
              }}
            >
             Search 
            </Button>
  </form>

 
<br></br>
<br></br>
<br></br>
<br></br>

<h1 style={{color:color,fontWeight:"900",fontFamily:"Poppins"}}>Gaza Sky Geeks Team,</h1>
<h1 style={{color:color,fontWeight:"900",fontFamily:"Poppins"}}>Thank you</h1>
</Stack>
</Grid>
<Grid item xs={4.5}>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>



{toShow}
</Grid>

</Grid>





















</div>




  )
}

export default SearchPage