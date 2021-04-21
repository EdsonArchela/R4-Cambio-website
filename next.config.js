module.exports = {
  trailingSlash: true,
  env: {
    SENDGRID_API_KEY: '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',
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
