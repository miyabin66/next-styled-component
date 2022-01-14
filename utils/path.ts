const basePath = '/assets'

const getPath = (dir: string, path: string) => `${basePath}/${dir}${path}`

const path = {
  image: (path: string) => getPath('images', path),
  sound: (path: string) => getPath('sounds', path),
  video: (path: string) => getPath('videos', path),
}

export default path
