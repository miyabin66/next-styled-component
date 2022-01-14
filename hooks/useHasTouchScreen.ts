import { useEffect, useState } from 'react'

export const useHasTouchScreen = () => {
  const [hasTouchScreen, setHasTouchScreen] = useState<boolean>(false)

  useEffect(() => {
    const isFlag = () => {
      if (navigator.maxTouchPoints > 0) {
        return true
      }
      if (window.matchMedia('(pointer:coarse)').matches) {
        return true
      }
      return false
    }
    setHasTouchScreen(isFlag())
  }, [])

  return {
    hasTouchScreen,
  }
}
