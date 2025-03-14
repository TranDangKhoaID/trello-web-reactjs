import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '~/App.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import theme from '~/theme'

//Cau hinh react-toastify
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <CssVarsProvider theme={theme}>
    <CssBaseline />
    <App />
    <ToastContainer position='bottom-left' theme='colored' />
  </CssVarsProvider>
  //</StrictMode>
)
