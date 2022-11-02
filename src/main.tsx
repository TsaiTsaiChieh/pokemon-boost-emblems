import './i18n'
import './index.css'

import React from 'react'

import {StyledEngineProvider} from '@mui/material/styles'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'

import App from './App'
import {store} from './store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>,
)
