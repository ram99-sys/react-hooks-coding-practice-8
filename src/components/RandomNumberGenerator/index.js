import {useState} from 'react'

import './index.css'

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(0)
  const onClickButton = () => {
    const generateNumber = Math.ceil(Math.random() * 100)
    setRandomNumber(generateNumber)
  }
  return (
    <div className="random-number-generator-container">
      <div className="app-container">
        <h1 className="heading">Random Number</h1>
        <p className="description">
          Generate a random number in the range of 0 to 100
        </p>
        <button type="button" className="button" onClick={onClickButton}>
          Generate
        </button>
        <p className="random-number">{randomNumber}</p>
      </div>
    </div>
  )
}

export default RandomNumberGenerator
