import { useEffect, useLayoutEffect } from 'react'

export const useIsomorphicEffect = () => {
  // server側でuseLayoutEffectが動作するとエラーになるので
  // server側はuseEffect、client側はuseLayoutEffectが発火するようにする
  return typeof window !== 'undefined' ? useLayoutEffect : useEffect
}
