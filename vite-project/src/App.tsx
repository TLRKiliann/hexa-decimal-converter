import CompBinaryDecimal from './components/CompBinaryDecimal.tsx'
import CompHexadecimalDecimal from './components/CompHexadecimalDecimal.tsx'
import CompAsciiToBinary from './components/CompAsciiToBinary.tsx'
import CompBinaryToAscii from './components/CompBinaryToAscii.tsx'
import CompAsciiToHex from './components/CompAsciiToHex.tsx'
import CompHexToAscii from './components/CompHexToAscii.tsx'
import math from '../public/images/math_wallpaper.jpeg'
import './App.css'

function App() {

  return (
    <>
      <div className="img--div">
        <img src={math} alt="math_wallpaper" />
      </div>
      <h1>Converter</h1>

      <div className="container">

        <div className="box">
          <h2>ASCII to binary:</h2>
          <CompAsciiToBinary />
        </div>

        <div className="box">
          <h2>binary to ASCII:</h2>
          <CompBinaryToAscii />
        </div>

      </div>

      <div className="container">

        <div className="box">
          <h2>binary to decimal:</h2>
          <CompBinaryDecimal />
        </div>

        <div className="box">
          <h2>hexadecimal to decimal:</h2>
          <CompHexadecimalDecimal />
        </div>

      </div>

      <div className="container">

        <div className="box">
          <h2>ASCII to Hex:</h2>
          <CompAsciiToHex />
        </div>

        <div className="box">
          <h2>Hex to ASCII:</h2>
          <CompHexToAscii />
        </div>

      </div>

    </>
  )
}

export default App
