import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Marketplace from './pages/Marketplace'
import Training from './pages/Training'
import Finance from './pages/Finance'
import Resort from './pages/Resort'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/training" element={<Training />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/resort" element={<Resort />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
