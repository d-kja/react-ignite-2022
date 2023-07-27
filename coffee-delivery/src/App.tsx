// Styled components
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global.styles'
import { defaultTheme } from './styles/themes/defaultTheme'

// Router components
import { BrowserRouter as Router } from 'react-router-dom'
import { DefaultRoutes } from './Routes'

import { Toaster } from 'react-hot-toast'
import { CartProvider } from './context/Cart/CartContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartProvider>
        <Router>
          <Toaster />
          <DefaultRoutes />
        </Router>
      </CartProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
