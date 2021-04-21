module.exports = {
  trailingSlash: true,
  env: {
    ZOHO_PWS: 'zfmVcwvYFPps',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': __dirname,
    }
    return config
  },
}
