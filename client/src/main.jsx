import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { StyleSheetManager } from 'styled-components'
import { StylesProps } from './utils/styles-props/styles-props.js'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyleSheetManager shouldForwardProp={(prop) => !StylesProps.includes(prop)}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StyleSheetManager>
      </PersistGate>
    </Provider>
    <Toaster
      position='bottom-right'
      dir='auto'
      visibleToasts={2}
      duration={3000}
      richColors
      closeButton
    />
  </StrictMode>,
)
