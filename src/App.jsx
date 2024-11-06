import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import './App.css'


function App() {

  return (
    <div className='px-7 py-5 md:px-10 md:py-8'>
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/gallery" element={<Gallery></Gallery>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes></BrowserRouter>
      <Footer></Footer>
    </div>
  )
}

export default App
