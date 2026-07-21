import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

console.log('[应用初始化]', {
  location: window.location.href,
  pathname: window.location.pathname,
  hostname: window.location.hostname,
  userAgent: navigator.userAgent,
  isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
})

const testImagePaths = [
  '/images/tarot/00-TheFool.webp',
  '/images/pattern_bright_silver.webp',
]

testImagePaths.forEach((path) => {
  const img = new Image()
  img.onload = () => {
    console.log('[图片路径测试-成功]', path)
  }
  img.onerror = () => {
    console.error('[图片路径测试-失败]', path)
  }
  img.src = path
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)