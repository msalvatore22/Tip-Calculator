import React from 'react'
import './result.css'
import useStore from '../store'
import formatter from '../usdFormatter'

const Result = () => {
  const {bill, tipPercent, customTipPercent, people, tipPerPerson, totalPerPerson} = useStore()
  return (
    <div className='result-container'>
      <div>
        <div className='result-text'>
          <div>
            <p className='result-name'>Tip Amount</p>
            <p className='per-person'>/ person</p>
          </div>
          <div>
            <h1 className='result-dollar'>{formatter.format(tipPerPerson)}</h1>
          </div>
        </div>
        <div className='result-text'>
          <div>
            <p className='result-name'>Total</p>
            <p className='per-person'>/ person</p>
          </div>
          <div>
            <h1 className='result-dollar'>{formatter.format(totalPerPerson)}</h1>
          </div>
        </div>
      </div>

      <div>
        <button className='reset-btn'>RESET</button>
      </div>
    </div>
  )
}

export default Result