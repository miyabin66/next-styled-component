import { useEffect } from 'react'
import { setProperty } from '~/utils/css'

const defineVw = () => {
  if (!process.browser) {
    return
  }
  setProperty('vw', document.documentElement.clientWidth / 100 + 'px')
}

const defineVh = () => {
  if (!process.browser) {
    return
  }
  setProperty('vh', window.innerHeight / 100 + 'px')
}

const defineDevicePixelRatio = () => {
  if (!process.browser) {
    return
  }
  setProperty('device-pixel-ratio', String(window.devicePixelRatio))
}

const defineViewportVariables = () => {
  defineVw()
  defineVh()
  defineDevicePixelRatio()
}

const useViewport = () => {
  useEffect(() => {
    if (!process.browser) {
      return
    }
    window.addEventListener('load', defineViewportVariables, { passive: true })
    window.addEventListener('resize', defineViewportVariables, {
      passive: true,
    })
    return () => {
      window.removeEventListener('load', defineViewportVariables)
      window.removeEventListener('resize', defineViewportVariables)
    }
  }, [])
}

export default useViewport
