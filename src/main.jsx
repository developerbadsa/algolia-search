import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='bg-green-500'>ready to start</div>
  </StrictMode>,
)
