const config=require('./webpack.config.js');
console.log(config);

const webpack=require('webpack');
let compiler=webpack(config);

console.log(compiler.run)

