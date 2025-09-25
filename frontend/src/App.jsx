import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Header from './components/Header'
import Home from './pages/Home'
import './App.css'
import AuthCard from './components/AuthCard'
import Header from './components/Header'
import Companies from './components/Companies'
import About from './components/About'
import PostJob from './components/PostJob'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/auth" element={<AuthCard />} /> */}
          <Route path="/companies" element={<Companies />} />
          <Route path="/about" element={<About />} />
          <Route path="/post-job" element={<PostJob />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
