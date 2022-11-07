import './i18n'
import './index.css'

import React from 'react'

import {StyledEngineProvider} from '@mui/material/styles'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'

import App from './App'
import {store} from './store'

const persistor = persistStore(store)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledEngineProvider injectFirst>
          {/* fix error:
          A component suspended while responding to synchronous input */}
          <React.Suspense fallback={<div>Loading...</div>}>
            <App />
          </React.Suspense>
        </StyledEngineProvider>
      </PersistGate>
    </Provider>

  </React.StrictMode >,
)
