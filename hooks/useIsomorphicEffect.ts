import { useEffect, useLayoutEffect } from 'react'

export const useIsomorphicEffect = () => {
  // https://zenn.dev/syu/articles/6b96e34535b33e
  // useEffectとuseLayoutEffectの使い分けスグに実行しなくていい処理や視覚的に影響を与えない処理にuseEffectを使い、初期表示した時点で絶対に実行しておきたい処理はuseLayoutEffectを使います。
  return typeof window !== 'undefined' ? useLayoutEffect : useEffect
}
