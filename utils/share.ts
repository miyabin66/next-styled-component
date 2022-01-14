import { stringify } from 'querystring'

/**
 * Twitterシェア用のリンクをつくる
 * @param {String} opts.url シェアしたいURL
 * @param {String} opts.text シェア文言
 * @param {String} opts.hashtags ハッシュタグ
 * @return {String}
 *
 * hashtagsにnullを入れるとスマホでシェアしたとき#が勝手に入るので注意
 */

export const createTwitterIntent = (opts: {
  url: string
  text: string
  hashtags: string[]
}): string => {
  return `https://twitter.com/intent/tweet?${stringify(opts)}`
}

/**
 * Facebookシェア用のリンクをつくる
 * @param {String} opts.u シェアしたいURL
 * @param {String} opts.quote シェア文言
 * @return {String}
 */
export const createFacebookIntent = (opts: {
  u: string
  quote: string
}): string => {
  return `https://www.facebook.com/sharer/sharer.php?${stringify(opts)}`
}

/**
 * LINEシェア用のリンクをつくる
 * @param {String} opts.url シェアしたいURL
 * @param {String} opts.text シェア文言
 * @return {String}
 */
export const createLineIntent = (opts: {
  url: string
  text: string
}): string => {
  const text = { text: `${opts.text}\n${opts.url}` }
  return `https://line.me/R/share?${stringify(text)}`
}
