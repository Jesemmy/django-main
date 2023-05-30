import React from 'react'
import "./home.css"
import Blogcard from '../components/Blogcard' 
import img1 from './../asset/img1.png'
import img2 from './../asset/img2.png'
import img3 from './../asset/img3.png'
import axios from "axios"

function Home() {

  const [datas, setDatas] = useState([])

  axios.get("http://localhost:8000/post/getarticles/")
  .then((res) => setDatas(res.data))
  .catch((err) => console.log(err))

  console.log(datas)
  
  return (
    <div className="home">
      <div className="banner">
        <h2>Minimal blog template for <br /> creative expressions</h2>
        <p>100% customisable and SEO-friendly blog <br /> template for personal and commercial purposes.</p>
      </div>

    <div className="articles p-5">
      <div className="d-flex justify-content-between align-items-center w-50 m-auto"  >
        <p>Daily Digest</p>
        <button className="btn p-1 bg-white">View All</button>
          </div>

     <div className="article">
      {datas?.map(data =>(
        <Blogcard title={data.title} pic= {`http://localhost:8000/${data.imgage}`} />
      ))}

      </div>
    </div>
 </div>

   
  )
} 

export default Home