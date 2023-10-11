import CompBinaryDecimal from './components/CompBinaryDecimal.tsx'
import CompHexadecimalDecimal from './components/CompHexadecimalDecimal.tsx'
import CompAsciiToBinary from './components/CompAsciiToBinary.tsx'
import './App.css'

function App() {

  return (
    <>
      <h1>Converter</h1>

      <div className="container">

        <div className="container--binary">
          <h2>ASCII to binary:</h2>
          <CompAsciiToBinary />
        </div>

        <div className="container--binary">
          <h2>binary to decimal:</h2>
          <CompBinaryDecimal />
        </div>

      </div>

      <div className="container">

        <div className="container--binary">
          <h2>hexadecimal to decimal:</h2>
          <CompHexadecimalDecimal />
        </div>

        <div className="container--binary">
          <h2>hexadecimal to decimal:</h2>
          <CompHexadecimalDecimal />
        </div>

      </div>

    </>
  )
}

export default App
