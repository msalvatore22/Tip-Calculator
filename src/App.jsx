import './App.css'
import Form from './form/Form'
import Result from './result/Result'
import useStore from './store'

function App() {
  return (
    <div className="app-container">
      <div className="app-card">
        <Form />
        <Result />
      </div>
    </div>
  )
}

export default App
