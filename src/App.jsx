import './App.css'
import BrowserComponent from './components/BrowserComponent'
import Navbar from './components/Navbar'
import Social from './components/Social'

function App() {

  return (
    <div className='h-auto overflow-y-auto bg-background w-screen flex flex-col items-center gap-10 justify-start'>
        <Navbar />
        <BrowserComponent />
        <Social />
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
  )
}

export default App
