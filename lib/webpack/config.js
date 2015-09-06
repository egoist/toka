module.exports = {
  entry: ['{{ entry }}'],
  output: {
    path: '{{ path }}',
    filename: '{{ filename }}'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'] }
    ]
  },
  plugins: []
}
