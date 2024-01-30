import React ,{useState,setInterval} from 'react'
import './Home.css'
import { GiTeacher } from "react-icons/gi";
import Cards from './Cards';
function Home() {
   
  
    return (
      <>
      <div >
        <div className='Select_top wit'>
          <div className='content'>
              <h1>Crack your goal with India's top educators</h1>
          </div>
          <div className='Logo-edu'>
            <h1><GiTeacher/></h1>
          </div>
        </div>
            <Cards/>
          
        </div>
      </>
    )
}


export default Home
