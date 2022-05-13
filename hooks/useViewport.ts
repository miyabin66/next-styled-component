import { useEffect } from 'react'
import { setProperty } from '~/utils/css'

const defineViewportVariables = () => {
  setProperty('vw', document.documentElement.clientWidth / 100 + 'px')
  setProperty('vh', window.innerHeight / 100 + 'px')
  setProperty('device-pixel-ratio', String(window.devicePixelRatio))
}

const useViewport = () => {
  useEffect(() => {
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
