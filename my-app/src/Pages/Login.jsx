import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../REDUX/auth/auth.actions'

const Login = () => {
    const dispatch = useDispatch()
    
    
    const [cred,setCred] = useState({
        email:"",
        password:""
    })
    const handleChange = (e)=>{
        const {name,value} = e.target
        console.log(name,value)
        setCred({
            ...cred,
        [name]:value
        })
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(login(cred))
    }
    
  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
      <input type="text" name="email" placeholder='EMAIL' onChange={handleChange}/>
      <br />
      <br />
      <input type="text" placeholder='PASSWORD'name="password" onChange={handleChange}/>
      <br />
      <br />
      <input type="SUBMIT" defaultValue="LOGIN"/>
      </form>
    </div>
  )
}

export default Login
