const basePath = '~/assets'
import a from '~/assets/images/vercel.svg'

const getPath = (dir: string, path: string) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // const i = require(`${basePath}/${dir}/${path}`)
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // console.log()
  const b = `${basePath}/images/vercel.svg`
  console.log(require(b).default as any)
  return a
}

const path = {
  image: (path: string) => getPath('images', path),
  sound: (path: string) => getPath('sounds', path),
  video: (path: string) => getPath('videos', path),
}

export default path
