import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
// import AuthCard from './components/AuthCard'
import Header from './components/Header'
import Companies from './pages/Companies'
import About from './pages/About'
import PostJob from './pages/PostJob'

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
