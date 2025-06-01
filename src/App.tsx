import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import Grades from './pages/addGrades'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/addGrades" element={<Grades />} />
      </Routes>
    </Router>
  )
}

export default App
