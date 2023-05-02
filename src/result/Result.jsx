import React from 'react'
import './result.css'
import useStore from '../store'

const Result = () => {
  const {bill, tipPercent, people, tipPerPerson, totalPerPerson} = useStore()
  return (
    <div>
      <p>Bill is {bill}</p>
      <p>Tip Percent is {tipPercent}</p>
      <p>People is {people}</p>
      <p>Tip per person is {tipPerPerson}</p>
      <p>Total per person is {totalPerPerson}</p>
    </div>
  )
}

export default Result