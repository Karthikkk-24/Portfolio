import './App.css'
import BrowserComponent from './components/BrowserComponent'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='h-screen bg-tertiary w-screen flex flex-col items-center gap-10 justify-start'>
        <Navbar />
        <BrowserComponent />
    </div>
  )
}

export default App
