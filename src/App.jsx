import './App.css'
import mountains from './assets/mountains.png'

function App() {
  return (
    <div className = "page">
      <main className="main">
        <h1 className="name">Enya Fang</h1>
        <p className="subtitle">Econ-Stats @ Columbia University</p>
    </main>

    <img
      src={mountains}
      alt="Mountain range"
      className="mountain-footer"
      />
    </div>
  )
}

export default App