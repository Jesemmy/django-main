import React from 'react'
import axios from 'axios'

function Updateuser() {

  const token = JSON.parse(localStorage.getItem("token"))
  

  const handleUpdate = (e) =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    axios.patch("http://localhost:8000/account/update/", form, {
      headers:{
        "Authorization": "Bearer " + token.access
      }

    })
     
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }
  return (
    <div className='w-50 m-auto'>
         <form onSubmit={(e) => handleUpdate(e)}>
   

    <div>
    <label htmlFor= "" className='form-label'>first_Name</label>
    <input type="text"  className='form-control' name= "email" />
    </div>

    <div>
    <label htmlFor= "" className='form-label'>last_Name</label>
    <input type="text"  className='form-control' name= "email" />
    </div>



    

    <button className="btn btn-primary">Update</button>
    </form>
    </div>
  )
}

export default Updateuser