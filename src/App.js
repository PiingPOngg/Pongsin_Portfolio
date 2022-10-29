import './App.css'
import Nav from "./component/Nav/Nav";
import Home from './component/Page/Home/Home.js'
import About from './component/Page/About/About';
import Experience from './component/Page/Experience/Experience';
import Services from './component/Page/Services/Services'
import Portfolio from './component/Page/Portfolio/Portfolio'
import Contact from './component/Page/Contact/Contact'
import NotFound from './component/Page/NotFound/NotFound'
import Footer from './component/Footer/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
        <Nav/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>}/>
          <Route path='experience' element={<Experience/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='portfolio' element={<Portfolio/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App