import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './components/Counter.jsx'
import Random from './components/Random.jsx'
import RandomName from './components/RandomName.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RandomName/>
  </StrictMode>,
)
