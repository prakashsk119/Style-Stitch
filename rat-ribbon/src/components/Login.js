import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from './Auth'
import Admin from './Admin'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [admin, setAdmin] = useState(false)
  const [style, setStyle] = useState(true)

  const navigate = useNavigate()
  const auth = useAuth()

  const handleLogin = (e) => {
    e.preventDefault()
    axios.get('http://localhost:3001/email/get')
      .then(res => {
        const list = res.data;
        const user = list.find(x => x.email === email)
        if (user) {
          if (user.password === password) {
            auth.login(user.name)
            navigate('/')
          } else {
            setError('Incorrect Password')
          }
        } else {
          setError('User not Found')
        }
      })
      .catch(err => {
        console.error(err)
        setError('An error occurred while fetching user data')
      });
  };

  const handleAdmin = (e) => {
    e.preventDefault()
    setAdmin(!admin)
    setStyle(!style)
  };

  return (
    <div>
      {style &&
        <form onSubmit={handleLogin} className='login-form'>
          <h1>LogIn User</h1>
          <label>Email:</label>
          <br />
          <input
            className='login1'
            type='email'
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(''); }}
            required
          />
          <br />
          <label>Password:</label>
          <br />
          <input
            className='login1'
            type='password'
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(''); }}
            required
          />
          <br />
          <button className='login1' type='submit'>Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      }
      {admin && <Admin />}
      <button onClick={handleAdmin} className='bt-switch'>{style ? "Admin user" : "Buyer"}</button>
    </div>
  )
}

export default Login
