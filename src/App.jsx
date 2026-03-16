import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BracketProvider } from './BracketContext'
import BracketPage from './pages/BracketPage'
import SummaryPage from './pages/SummaryPage'

export default function App() {
  return (
    <BracketProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BracketPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </BrowserRouter>
    </BracketProvider>
  )
}
