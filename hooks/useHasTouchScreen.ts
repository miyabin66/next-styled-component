import { useEffect, useState } from 'react'

export const useHasTouchScreen = () => {
  const [hasTouchScreen, setHasTouchScreen] = useState<boolean>(false)

  useEffect(() => {
    setHasTouchScreen(
      navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer:coarse)').matches,
    )
  }, [])

  return {
    hasTouchScreen,
  }
}
