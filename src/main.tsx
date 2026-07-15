import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'
import V2App from './V2App'
import './v2.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <V2App />
    <Analytics />
  </StrictMode>,
)
