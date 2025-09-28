import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Bloglist from './components/Bloglist'
import Blogdetails from './components/Blogdetails'  
import Navbar from './components/Navbar'
const App = () => {
  return (
    <Router>
      <Navbar/>
           <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Bloglist />} />
        <Route path="/blogs/:id" element={<Blogdetails />} /> 
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App