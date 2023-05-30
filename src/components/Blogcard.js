import React from 'react'
// import img from "./../asset/img1.png"

function Blogcard({pic , title}) {
  return (
    <div className="blogcard w-75 m-auto">
        <div className="card">
            <div className="card-body">
                <div className="row">

                <div className="col-md-8 col-12 p-3" >
                    <small className=''>{new Date().toLocaleDateString()}</small>
                    <h6 className='"my-2'>{title}</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, possimus.</p>
                </div>

                <div className="col-md-4 col-12">
                <img src={pic} alt="card"className='img-fluid' />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogcard