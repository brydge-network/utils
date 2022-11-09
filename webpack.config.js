const path = require('path');

module.exports = {
  target: 'web',
  mode: 'production',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  entry: {
    iFrameSerializer: './src/iFrameSerializer.ts',
    createCalls: './src/createCalls/index.ts',
  },
  output: {
    filename: '[name]Bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: '[name]',
  },
};
