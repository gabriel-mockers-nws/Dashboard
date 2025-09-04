import './styles.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Overview from './Pages/Overview'
import Transactions from './Pages/transactions'
import Customers from './Pages/clients'

function App() {

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-green-600 to-green-900">
        <Router>
            <Header/>
              <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/clients" element={<Customers />} />
              </Routes>
        </Router>
      </div>
    </>
  )
}

export default App