const path = require('path')

modele.exports = {
  entry: './src/index.js', //默认打包index.js
  output: {
    //出口文件
    filename: 'bundle.js',
    path: path.resolve(_dirname, 'bundle'),
  },
}
