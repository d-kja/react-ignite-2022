import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global.styles'
import { defaultTheme } from './styles/themes/defaultTheme'

import { BrowserRouter } from 'react-router-dom'
import { CyclesProvider } from './context/CyclesContext'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesProvider>
          <Router />
        </CyclesProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
