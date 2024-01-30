import React from 'react'
import { TfiGift } from "react-icons/tfi";
import { NavLink } from 'react-router-dom';

function Cards() {
  const test=()=>{
    
} 
  return (

    <><br /> 
     <div className='wit'>
        <div className="center-promo-page">
      <div className="promo-content">
        <div className="promo-details">
          <h1>Visit the Centre for a Personalized Experience</h1>
          <div className='inrow'>
            <div className='box-item'>
              <div className='box-item1'>
                <div ><img src='https://static.uacdn.net/images/ocx/BAV/offering1.png?q=75&auto=format%2Ccompress&w=36'/></div>
                <div className='list-item'> Get exclusive Unacademy goodies and swag</div>
              </div>
              <div className='box-item1'>
                <div ><img src='https://static.uacdn.net/images/ocx/BAV/offering3.png?q=75&auto=format%2Ccompress&w=36'/></div>
                <div className='list-item'> Attend free special classes by top mentors</div>
              </div>
            </div>
            <div className='box-item'>
              <div className='box-item1'>
                <div ><img src='https://static.uacdn.net/images/ocx/BAV/offering2.png?q=75&auto=format%2Ccompress&w=36'/></div>
                <div className='list-item'> Avail personal priority counseling session</div>
              </div>
              <div className='box-item1'>
                <div ><img src='https://static.uacdn.net/images/ocx/BAV/offering4.png?q=75&auto=format%2Ccompress&w=36'/></div>
                <div className='list-item'> Take a tour of our tech-enabled classes and library</div>
              </div>
            </div>
            </div>
            <br /><br /><br />
          <button >Visit Centre</button>
          <p>Centres timings : 10 AM to 7 PM</p>
        </div>
        <img src="https://static.uacdn.net/web-cms/uncentre_LP_b041622b0f.jpg?q=75&fm=webp&w=750&auto=format%2Ccompress" alt="Interior" className="interior-image" />
      </div>
    </div>
    </div>
    <div className='newdiv'>
    <div className='box-item2'>
      <div>
        <div>
          <h1>Take a test for free and win up to 50% scholarship</h1>
          <div className='inrow1'>
            <div>
            <img src="https://static.uacdn.net/production/_next/static/images/dst/tick.svg?q=75&auto=format%2Ccompress&w=48" alt="tick" />
            Just 15 minutes
            </div>
            <div>
            <img src="https://static.uacdn.net/production/_next/static/images/dst/tick.svg?q=75&auto=format%2Ccompress&w=48" alt="tick" />
            15 quick questions
            </div>
          </div>
          <button ><NavLink to='https://unacademy.com/goal/jee-main-and-advanced-preparation/TMUVD/scholarship-test' > Start Test Now</NavLink></button>
        </div>
      </div>
      <div className='Prise'>
        <div >
          <img src="https://static.uacdn.net/production/_next/static/images/dst/trophy-v2.svg?q=75&auto=format%2Ccompress&w=384" alt="" />
        </div>
        <div>
       <h4> 217 learners have won
₹28.3L worth of scholarships</h4>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Cards
