import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import MainStore from './assets/pages/stores/MainStore'

createRoot(document.getElementById('root')).render(
 <MainStore>
 <BrowserRouter>
<App />
 </BrowserRouter>
 </MainStore>
    

)
