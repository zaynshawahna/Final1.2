// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import Input from '@mui/material/Input';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 550,
//   height: 600,
//   bgcolor: '#1d1d1d',
//   borderRadius: "23px",
//   p: 4,
// };

// const ToEditUser = ({ open, onClose}) => {
  
//   const [description, setDescription] = useState('');
//   const [userName, setUserName] = useState('');
//   const [image, setImage] = useState(null);
//   const [imageCover, setImageCover] = useState(null);
//   const [toClose,setToClose]=useState(true)
//   const navigate=useNavigate()
//   const token = localStorage.getItem('token');

  
//   const handleDescriptionChange = (event) => {
//     setDescription(event.target.value);
//     localStorage.setItem("bio",event.target.value)
//   };
//   const  handleUserNameChange = (event) => {
//     setUserName(event.target.value);
//     localStorage.setItem("userName",event.target.value)
//   };
 

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     console.log(file)
//     setImage(file);
  

//     const reader = new FileReader();
//     reader.onload = () => {
//       setImageCover(reader.result);
//     };
//     reader.readAsDataURL(file);
//     localStorage.setItem("avatar",image)
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     let formData = new FormData();
//     formData.append('bio', description);
//     formData.append('avatar', image);
//     formData.append('userName', userName);


//   const handleSubmit = (event) => {
//     event.preventDefault();

//     axios
//     .put('http://16.170.173.197/users', formData, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'multipart/form-data',
//       },
//     })
//     .then((response) => {
      
       
      
//     })
//     .catch((error) => {
//       console.error('Error:', error);
      
//     });
//       navigate("/four")


// setToClose(false)
//   };

//   return (
//     <Modal
//       open={open}
//       onClose={onClose}
//       aria-labelledby="modal-modal-description"
//       aria-describedby="modal-modal-description"
//     >
//       <Box sx={style}>
//         <Typography
//           variant="h6"
//           component="div"
//           style={{ textAlign: "center", color: "white", fontFamily: "Poppins", fontWeight: "800" }} 
//         >
//           Create a memory
//         </Typography>
//         <hr style={{
//           height: "2px",
//           backgroundColor: '#8d8d8d',
//           border: 'none',
//         }}></hr>
        
//         <form>
//         <br></br>
//         <label htmlFor='inputt' style={{ textAlign: "left", color: "white", fontFamily: "Poppins", borderRadius: "23px", fontWeight: "300" }}>Edit user name</label>
//         <br></br>
//           <Input
            
//             value={userName}
//             onChange={handleUserNameChange}
//             required
//             fullWidth
//             sx={{ mb: 2, backgroundColor: '#8d8d8d', border: 'solid 2px white', borderRadius: '10px' }} 
//           />

// <label htmlFor='inputt' 
// style={{ textAlign: "left", color: "white", fontFamily: "Poppins", borderRadius: "23px", fontWeight: "300" }}
// value={description}
// onChange={handleDescriptionChange}
// >Edit Bio</label>
//         <br></br>
//         <input name="inputt" style={{ width: "100%", height: "100px", borderRadius: "10px", backgroundColor: '#8d8d8d', border: "solid 2px white" }}></input>
//           <br/><br/><br/>
          
//           {imageCover && (
//             <img
//               src={imageCover}
//               alt="Uploaded"
//               style={{ width: '30%', marginBottom: '1rem',height:"20%" }}
//             />
//           )}

//           <label htmlFor="image-upload">
//             <Button
//               variant="contained"
//               component="span"
//               sx={{
//                 fontFamily: 'Poppins',
//                 width: '100%',
//                 textAlign: 'left',
//                 fontWeight: 900,
//                 marginBottom: '5px',
//                 paddingTop: '5px',
//                 paddingBottom: '5px',
//                 borderRadius: '10px',
//                 fontSize: '14px',
//                 color: 'white',
//                 backgroundColor: '#1F4172',
//                 ':hover': {
//                   bgcolor: 'white',
//                   color: 'black',
//                 },
//                 '&:active': {
//                   boxShadow: 'none',
//                   backgroundColor: 'white',
//                   color: 'black',
//                 },
//               }}
//             >
//               Upload Image
//             </Button>
//           </label>
//           <input
//             id="image-upload"
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             style={{ display: 'none' }}
//           />
//           <br>
//           </br><br/>

//           <div style={{ display: 'flex', justifyContent: 'center' }}>
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             onClick={handleSubmit}
//             sx={{
//               fontWeight: 900,
//               paddingTop: '5px',
//               fontFamily: 'Poppins',
//               paddingBottom: '5px',
//               borderRadius: '10px',
//               fontSize: '14px',
//               color: 'white',
//               backgroundColor: '#1F4172',
//               ':hover': {
//                 bgcolor: 'white',
//                 color: 'black',
//               },
//               '&:active': {
//                 boxShadow: 'none',
//                 backgroundColor: 'white',
//                 color: 'black',
//               },
//             }}
//           >
//             Post
//           </Button>
//           </div>

//         </form>
//       </Box>
//     </Modal>
//   );
// };
// }
// export default ToEditUser
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  height: 660,
  bgcolor: '#1d1d1d',
  borderRadius: "23px",
  p: 4,
};

const ToEditUser = ({ open, onClose, setMemories ,id}) => {
  
  const [description, setDescription] = useState(localStorage.getItem("userName"));
  const [bio, setBio] = useState(localStorage.getItem("bio"));
  const [image, setImage] = useState(localStorage.getItem("avatar"));
  const [imageCover, setImageCover] = useState(localStorage.getItem("avatar"));
  const [toClose,setToClose]=useState(true)
  const navigate=useNavigate()
  const token = localStorage.getItem('token');

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };  
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    setImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      setImageCover(reader.result);
      console.log(reader.result)
    };
    reader.readAsDataURL(file);
    
   
   
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append('bio', bio );
    formData.append('userName', description);
    formData.append('avatar',image );
    
;
    axios
    .put('http://16.170.173.197/users', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => {
        localStorage.setItem("userName",description)
        localStorage.setItem("avatar",imageCover)
        localStorage.setItem("bio",bio)
        console.log(localStorage.setItem("avatar",imageCover))
        
        navigate("/four")
      
    })
    .catch((error) => {
      console.error('Error:', error);
      
    });




setToClose(false)
  };

  return (
    <Modal
      open={open&&toClose}
      onClose={onClose}
      aria-labelledby="modal-modal-description"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          variant="h6"
          component="div"
          style={{ textAlign: "center", color: "white", fontFamily: "Poppins", fontWeight: "800" }} 
        >
         Edit user 
        </Typography>
        <hr style={{
          height: "2px",
          backgroundColor: '#8d8d8d',
          border: 'none',
        }}></hr>
        
        <form>
        <br></br>
        <label  style={{ textAlign: "left", color: "white", fontFamily: "Poppins", borderRadius: "23px", fontWeight: "300" }}>enter new user name</label>
        <br></br>
          <Input
            
            value={description}
            onChange={handleDescriptionChange}
            required
            fullWidth
            sx={{ mb: 2, backgroundColor: '#8d8d8d', border: 'solid 2px white', borderRadius: '10px' }} 
          />

<label 

style={{ textAlign: "left", color: "white", fontFamily: "Poppins", borderRadius: "23px", fontWeight: "300" }}>enter new bio</label>
        <br></br>
        <input 
                    value={bio}
                    onChange={handleBioChange}
        name="inputt" style={{ width: "100%", height: "100px", borderRadius: "10px", backgroundColor: '#8d8d8d', border: "solid 2px white" }}></input>
          <br/><br/><br/>
          
          {imageCover && (
            <img
              src={imageCover}
              alt="Uploaded"
              style={{ width: '30%', marginBottom: '1rem',height:"20%" }}
            />
          )}

          <label htmlFor="image-upload">
            <Button
              variant="contained"
              component="span"
              sx={{
                fontFamily: 'Poppins',
                width: '100%',
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
              Upload new avatar
            </Button>
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <br>
          </br><br/>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{
              fontWeight: 900,
              paddingTop: '5px',
              fontFamily: 'Poppins',
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
        Submit
          </Button>
          </div>

        </form>
      </Box>
    </Modal>
  );
};

export default ToEditUser;

