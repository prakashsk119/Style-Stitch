import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {

    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const navigate=useNavigate()
    function handleSignUp(){
        axios.post('mongodb://127.0.0.1:27017/Project/post',{name,email,password})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        navigate('/login')
    }
    const handleLogin=()=>{
        navigate('/login')
    }
  return (
    <div>
        <form onSubmit={handleSignUp} className='login-form'>
            <h1 style={{textDecoration:"underline red"}}>Sign Up</h1>
        <label>Name:</label>
        <br />
        <div>
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} required></input>
        </div>
        <label>Email:</label>
        <br />
        <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required></input>
        <br />
        <label>Password:</label>
        <br />
        <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required></input>
        <br /><br></br>
        <button type='submit'>SignUp</button>
        <p style={{textDecoration:'underline'}}>Already Have Account Please Login :<br></br>
        <button onClick={handleLogin}>Login</button> </p>   
        <br />
        </form>
      
    </div>
  )
}

export default SignUp