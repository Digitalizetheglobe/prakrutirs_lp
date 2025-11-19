import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrakritiLanding from './components/home.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrakritiLanding />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  )
}

export default App
