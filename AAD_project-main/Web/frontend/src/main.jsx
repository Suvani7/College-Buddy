import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router.jsx'
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/600.css'
import '@fontsource/playfair-display/700.css'
import './css/index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// )
const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

// remove the initial static loader (if present) with a small fade
const loader = document.getElementById('initial-loader')
if (loader) {
  // give React one frame to paint then fade and remove
  requestAnimationFrame(() => {
    loader.classList.add('fade-out')
    setTimeout(() => loader.remove(), 400)
  })
}