import {ThemeProvider, createTheme} from '@mui/material/styles'

import WholeWrapper from './components/WholeWrapper'
import {getDesignTokens} from './constants/theme'
import Emblem from './page/emblem/Emblem'
import Header from './page/header/Header'
import {useAppSelector} from './store/hook'

const App = () => {
  const {isDarkMode} = useAppSelector((state) => state.persist)
  const theme = createTheme(getDesignTokens(isDarkMode ? 'dark' : 'light'))

  return (
    <ThemeProvider theme={theme}>
      <WholeWrapper>
        <Header />
        <Emblem />
      </WholeWrapper>
    </ThemeProvider>
  )
}

export default App
