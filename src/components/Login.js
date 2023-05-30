import React from 'react'
import axios from 'axios'

function Login() {

  const handleLogin = (e) =>{
    e.preventDefault()

    const form = new FormData(e.currentTarget)

    axios.post("http://localhost:8000/account/login/", form)
    .then((res) => {
      if (res.data.message ==="error"){
        alert("Invalid Credentials");

      }else if(res.data.message === "success"){
        alert("login successful")
        localStorage.setItem("login", true)
        localStorage.setItem("token", JSON.stringify(res.data.info))
      
      }
    })

    .catch((err) => console.log(err))
  }
  return (
    <div className= "login  w-50 m-auto">
      <form onSubmit={(e) => handleLogin(e)}>
    <div>
    <label htmlFor= "" className='form-label'>Email</label>
    <input type="email"  className='form-control' name= "email" />
    </div>


    <div>
    <label htmlFor="" className='form-label'>Password</label>
    <input type="password" className='form-control' name= "password" />
    </div>

    <button className="btn btn-primary">Login</button>
    </form>
    </div>
  )
}

export default Login