import React from 'react'
import { axiosRequest, saveToken } from './utils/token'

const App = () => {
  async function LogIn(obj) {
    try {
      const {data}=await axiosRequest.post(`/auth/login`, obj)
      saveToken(data.accessToken, data.refreshToken)
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmitLogIn=(e)=>{
    e.preventDefault()
    console.log(e.target.email.value);
    
    const obj={
      email:e.target.email.value,
      password:e.target.password.value
    }
    LogIn(obj)
  }

  return (
    <div>
      <form onSubmit={handleSubmitLogIn}>
        <input type="email" name='email'/>
        <input type="password" name='password'/>
        <button type='submit'>LogIn</button>
      </form>
    </div>
  )
}

export default App