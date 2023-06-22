import { Route, Routes } from 'react-router-dom'
import { Navbar } from './layouts/Navbar'

// Route components
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Summary } from './pages/Summary'

export const DefaultRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/summary" element={<Summary />} />
      </Route>
    </Routes>
  )
}
