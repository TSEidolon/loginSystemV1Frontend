
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ChatacterAnimationProvider } from './components/features/modelAnimations.jsx'

createRoot(document.getElementById('root')).render(
  <ChatacterAnimationProvider>
    <App />
  </ChatacterAnimationProvider>
  
)
