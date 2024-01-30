import React from 'react'
import './TCard.css'
function TCard(props) {
  return (
    <>
      <div className='main-div'>
        <div className='Img'>
            <img src={props.img} alt="tuter-image" />
        </div>
        <div className='card-content'>
            <div className='name'>
                <h3>{props.name}</h3>
            </div>
            <div className='name'>
                <p>
                A mentor to AIR 1, four 100 percentilers in 
                JEE Mains and a guiding light to 10k+
                IITians- all of these add to his exceptional
                 achievements. 
                </p>
            </div>
            <div className='name'>
                <h3>{props.followers}</h3>
            </div>
        </div>
      </div>
    </>
  )
}

export default TCard
