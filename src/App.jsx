import {Navbar} from './components/Navbar.jsx'
import { Home } from './pages/Home.jsx'
import './styles/App.css'

function App() {
  return (
    <div className='main' >
      <Navbar/>
      <Home />
    </div>
  )
}

export default App
