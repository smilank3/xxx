"use strict"


const webpack=require('webpack');
const webpackConfig=require('./webpack.config.js');

const webpackDevServer=require('./node_modules/webpack-dev-server/lib/Server');



const devSever=Object.assign({},webpackConfig.devSever,{
	stats:{
		colors:true
	}
})

const compiler=webpack(webpackConfig);
var server=new webpackDevServer(compiler,devSever);
server.listen(4000,()=>{
	console.log('starting server')
})
