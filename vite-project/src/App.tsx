import CompBinaryDecimal from './components/CompBinaryDecimal.tsx'
import CompHexadecimalDecimal from './components/CompHexadecimalDecimal.tsx'

import './App.css'

function App() {

  return (
    <>
      <h1>Converter</h1>

      <h2>Converter binary to decimal:</h2>

      <div className="container--binary">
        <CompBinaryDecimal />
      </div>

      <div className="container--binary">
        <CompHexadecimalDecimal />
      </div>
    </>
  )
}

export default App
