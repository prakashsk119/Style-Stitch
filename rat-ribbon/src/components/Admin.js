import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from './Auth'

const Admin = () => {

    const [email,setemail]=useState('')
    const[password,setPassword]=useState('')
    const[list,setList]=useState([])
    const[error,setError]=useState('') 

const navigate=useNavigate()

useEffect(()=>{
    axios.get(`http://localhost:3001/admin/get`)
    .then(res=>
        console.log(res)
        (setList(res.data)))
    .catch(err=>console.log(err))
},[])

const auth=useAuth()

const handleLogin =(e)=>{
    e.preventDefault()  
    
    axios.get(`http://localhost:3001/admin/get/${email}`)
    .then(res=>{
      console.log(res.data)
      setList(res.data[0].name)
      if(res.data[0]?.email){
        if(res.data[0]?.password === password){
          auth.adlogin(list)
                  navigate('/')
        }
        else{
          setError('Incorrect Password')
        }
      }else{
        setemail('email not found')
      }
    }
    )
    .catch(err=>console.log(err))
    
    }


  return (
    <div className='admin'>
        <form onSubmit={handleLogin} >
            <h1 style={{textDecoration:"underline red"}}>Admin</h1>

            <label>Admin ID</label>
          <br />
            <input type='text' placeholder='please enter email' value={email} onChange={(e)=>{setemail(e.target.value)}} required></input>
            <br /><br></br>
            <label>Password:</label>
            <br />
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required></input>
            <br /><br></br>
            <div className='btn'>
            <button type='submit'>login</button>
            </div>


        </form>
        {error}
      
    </div>
  )
}

export default Admin