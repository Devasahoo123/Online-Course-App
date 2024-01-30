import React from 'react'
import TCard from './TCard'
import data from './Sdata'
import './TCard.css'
function Teacher() {
  return (
    <>
      <div>
        <div>
            <h1>IIT JEE Educators</h1>
        </div>
        <div className='Cards'>
            <TCard name={data[0].name} followers={data[0].followers} img={data[0].img} />
            <TCard name={data[1].name} followers={data[1].followers} img={data[1].img} />
            <TCard name={data[2].name} followers={data[2].followers} img={data[2].img} />
            <TCard name={data[3].name} followers={data[3].followers} img={data[3].img} />
            <TCard name={data[3].name} followers={data[3].followers} img={data[3].img} />
            
        </div>
      </div>
    </>
  )
}

export default Teacher
