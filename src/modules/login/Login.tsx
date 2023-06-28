import React, { useState } from 'react';
import {Card,Box,Button} from '@mui/material'
import bgblue from '../../assets/images/blueBackGround.jpg'
import eyeIconOpen from '../../assets/icons/eye-open.png'
import eyeIconClosed from '../../assets/icons/eye-closed (1).png'
import { hover } from '@testing-library/user-event/dist/hover';
import { readBuilderProgram } from 'typescript';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const[register,setRegister]=useState(false);

  const handleFullNameChange = (event: {target: {value: React.SetStateAction<string> }}) => {
    setFullName(event.target.value)
  }

  const handleEmailChange = (event: {target: {value: React.SetStateAction<string> }}) => {
    setEmail(event.target.value)
  }

  const handleMobileNumberChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setMobileNumber(event.target.value);
  };

  const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Perform your login logic here
    console.log('Mobile Number:', mobileNumber);
    console.log('Password:', password);
  };

  const handleRegister = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setRegister(!register)
    setFullName('')
    setEmail('')
    setMobileNumber('')
    setPassword('')
    setShowPassword(false)
    // Perform your registration logic here
    console.log('Mobile Number:', mobileNumber);
    console.log('Password:', password);
  };

  return (
    <Box 
    sx={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
        backgroundImage:'url(https://img.freepik.com/premium-photo/abstract-blue-background-texture_196038-4760.jpg)'
    }}
      >
    <Card sx={{
        height:'28rem',
        width:'50rem',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    }}>
    <Box //child 1
    sx={{width:'50%',height:'100',borderRight:'1px solid lightgrey'}} > 
    <img src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-login_516790-1261.jpg?w=2000"height={'100%'} width={'100%'} alt="login page"/>
    </Box>
    
    {register?(<Box sx={{ //child 2
        width:'56%',
        height:'100%',
        backgroundImage:`url(${bgblue})`,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'        
    }}>  
    <Box 
    sx={{
        width:'90%',
        height:'100%',
        display:'flex',
        paddingLeft:'1rem',
        flexDirection:'column' ,
        aligncontent:'center',
        }}>
    
      <Box sx={{         //for register
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:'5rem'
      }}>
        <h2 style={{ fontFamily:'sans-serif', color:'#1E90FF'}}>Register</h2>
      </Box>


      <form>
      <Box sx={{
            display:'flex',
            flexDirection:'row',
            // bgcolor:'yellow',
            width:'100%',
            mt:1,
            mb:3
            }}>
          <Box sx={{
            display:'flex',
            flexDirection:'row',
            width:'38%',
            height:'24px',
            alignItems:'center'
            // bgcolor:'gold'
          }}>     
          <label style={{
            fontFamily:'sans-serif',
          }} htmlFor="fullname">Full Name:</label>
          </Box> 
          <Box>
          <input
            style={{
                height:'100%',
                backgroundColor:'transparent'
            }}
            type="text"
            id="fullname"
            placeholder='Enter full name'
            value={fullName}
            onChange={handleFullNameChange}
          />
          </Box>
        </Box>
      <Box sx={{
            display:'flex',
            flexDirection:'row',
            // bgcolor:'yellow',
            width:'100%',
            mt:1,
            mb:3
            }}>
          <Box sx={{
            display:'flex',
            flexDirection:'row',
            width:'38%',
            height:'24px',
            alignItems:'center'
            // bgcolor:'gold'
          }}>     
          <label style={{
            fontFamily:'sans-serif',
          }} htmlFor="email">Email:</label>
          </Box> 
          <Box>
          <input
            style={{
                height:'100%',
                backgroundColor:'transparent'
            }}
            type="email"
            id="email"
            placeholder='Enter email'
            value={email}
            onChange={handleEmailChange}
          />
          </Box>
        </Box>
        <Box sx={{
            display:'flex',
            flexDirection:'row',
            // bgcolor:'yellow',
            width:'100%',
            mt:1,
            mb:3
            }}>
          <Box sx={{
            display:'flex',
            flexDirection:'row',
            width:'38%',
            height:'24px',
            alignItems:'center'
            // bgcolor:'gold'
          }}>     
          <label style={{
            fontFamily:'sans-serif',
          }} htmlFor="mobileNumber">Mobile Number:</label>
          </Box> 
          <Box>
          <input
            style={{
                height:'100%',
                backgroundColor:'transparent'
            }}
            type="number"
            id="mobileNumber"
            placeholder='Enter mobile number'
            value={mobileNumber}
            onChange={handleMobileNumberChange}
          />
          </Box>
        </Box>
        <Box
         sx={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            height:'24px',
            // bgcolor:'grey',
            width:'100%',
            mb:4,
            mt:3
            }}>
          <Box sx={{
            display:'flex',
            flexDirection:'row',
            width:'38%',
            alignItems:'center'
            // bgcolor:'lightcyan'
          }}> 
          <label style={{fontFamily:'sans-serif'}} htmlFor="password">Password:</label>
          </Box>
          <span style={{display:'flex',flexDirection:'row',alignItems:'center',height:'100%'}}>
            <input
              style={{
                height:'100%',
                marginRight:'2px',
                backgroundColor:'transparent',
              }}
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder='Enter password'
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              style={{ 
                cursor:'pointer',
                backgroundColor:'transparent',

              }}
              type="button"
              className={`password-toggle-button ${showPassword ? 'visible' : 'hidden'}`}
              onClick={toggleShowPassword}
            >
              {showPassword ? <img src={eyeIconOpen} alt='eye icon open'/> : <img src={eyeIconClosed} alt='eye closed'/>}
            </button>
          </span>
        </Box>
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            alignContent:'center',
        }}>
          <Button variant='contained' size='small' onClick={handleRegister}>Register</Button>
        </Box>
      </form>
      </Box>
      </Box>):(<Box sx={{ //child 2
        width:'56%',
        height:'100%',
        backgroundImage:`url(${bgblue})`,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
    }}>  
    <Box 
    sx={{
        width:'90%',
        height:'100%',
        display:'flex',
        paddingLeft:'1rem',
        flexDirection:'column' ,
        aligncontent:'center',
        }}>
    
      <Box sx={{         //for login
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:'5rem'
      }}>
        <h2 style={{ fontFamily:'sans-serif', color:'#1E90FF'}}>Login</h2>
      </Box>


      <form>
        <Box sx={{
            display:'flex',
            flexDirection:'row',
            // bgcolor:'yellow',
            width:'100%',
            mt:1,
            mb:1
            }}>
          <Box sx={{
            display:'flex',
            flexDirection:'row',
            width:'38%',
            height:'24px',
            alignItems:'center'
            // bgcolor:'gold'
          }}>     
          <label style={{
            fontFamily:'sans-serif',
          }} htmlFor="mobileNumber">Mobile Number:</label>
          </Box> 
          <Box>
          <input
            style={{
                height:'100%',
                backgroundColor:'transparent'
            }}
            type="text"
            id="mobileNumber"
            placeholder='Enter mobile number'
            value={mobileNumber}
            onChange={handleMobileNumberChange}
          />
          </Box>
        </Box>
        <Box
         sx={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            height:'24px',
            // bgcolor:'grey',
            width:'100%',
            mb:1,
            mt:3
            }}>
          <Box sx={{
            display:'flex',
            flexDirection:'row',
            width:'38%',
            alignItems:'center'
            // bgcolor:'lightcyan'
          }}> 
          <label style={{fontFamily:'sans-serif'}} htmlFor="password">Password:</label>
          </Box>
          <span style={{display:'flex',flexDirection:'row',alignItems:'center',height:'100%'}}>
            <input
              style={{
                height:'100%',
                marginRight:'2px',
                backgroundColor:'transparent',
              }}
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder='Enter password'
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              style={{ 
                cursor:'pointer',
                backgroundColor:'transparent',

              }}
              type="button"
              className={`password-toggle-button ${showPassword ? 'visible' : 'hidden'}`}
              onClick={toggleShowPassword}
            >
              {showPassword ? <img src={eyeIconOpen} alt='eye icon open'/> : <img src={eyeIconClosed} alt='eye closed'/>}
            </button>
          </span>
        </Box>
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            alignContent:'center',
        }}>
          <Button variant='contained'size='small' type="submit" onClick={handleLogin} sx={{mt:2}}>Login</Button>
          <p style={{alignSelf:'center'}}>-----or-----</p>
          <Button variant='contained' size='small' onClick={handleRegister}>Register</Button>
        </Box>
      </form>
      </Box>
      </Box>)}
    </Card>
    </Box>
  );
};

export default Login;
