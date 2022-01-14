const BASE_PATH = '/'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL + BASE_PATH

const TITLE = ''
const DESCRIPTION = ''
const OG_IMAGE = BASE_URL + 'ogp.jpg'

const meta = {
  viewport: 'width=device-width, initial-scale=1.0',
  title: TITLE,
  description: DESCRIPTION,
  keywords: [].join(),
  basePath: BASE_PATH,
  url: BASE_URL,
  ogImage: OG_IMAGE,
  faviconPath: '/favicon.ico',
  appleTouchIconPath: '',
  applicationName: '',
  image: OG_IMAGE,
  card: 'summary_large_image',
}

export default meta
