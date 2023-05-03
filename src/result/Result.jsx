import React from 'react'
import './result.css'
import useStore from '../store'
import formatter from '../usdFormatter'

const Result = () => {
  const {bill, tipPercent, people, tipPerPerson, totalPerPerson} = useStore()
  return (
    <div>
      <p>Bill is {formatter.format(bill)}</p>
      <p>Tip Percent is {tipPercent}</p>
      <p>People is {people}</p>
      <p>Tip per person is {formatter.format(tipPerPerson)}</p>
      <p>Total per person is {formatter.format(totalPerPerson)}</p>
    </div>
  )
}

export default Result