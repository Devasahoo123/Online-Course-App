import React from 'react'
import { MdOutlineTimer } from "react-icons/md";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import './AllCSS.css'
function CCard() {
  return (
    <>
      <div className='main-divC'>
        <div className='mn'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzb-tHLTy_x3v4ZB57K-ufNqxXyHPT3AARmQ&usqp=CAU" alt="" />
        </div>
        <div className='content-item'>
            <h2>Course Name</h2>
        </div>
        <div className='content-item'>
            <p>Learn web development: HTML, CSS, JavaScript, React, responsive design, front-end/back-end, version control, practical projects, real-world examples.</p>
        </div>
        <div className='content-item last-elm'>
            <div>
                <MdOutlineTimer/> 1hr
            </div>
            <div>
                <VscDeviceCameraVideo/>
            </div>
            <div>
                7 vedios
            </div>
        </div>
      </div>
    </>
  )
}

export default CCard
