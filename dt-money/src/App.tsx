import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/Transactions/context'
import { Transactions } from './pages/Transaction'
import { GlobalStyle } from './styles/global.style'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
