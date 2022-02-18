/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    styledComponents: true,
  },
  images: {
    disableStaticImages: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          fallback: {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/images',
              outputPath: 'static/images',
            },
          },
        },
      },
    })
    return config
  },
}

module.exports = nextConfig
