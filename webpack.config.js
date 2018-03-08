const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const ugly=require('uglifyjs-webpack-plugin');




module.exports ={ 
	context:path.resolve(__dirname,"src"),
	entry:'./js/index.js',
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname,'dist'),
		library:'my_library',
		libraryTarget:'umd',
		auxiliaryComment:"Text Comment"
	},
	module:{
		rules:[{test:/\.(js|jsx)?$/,
		   loader:"babel-loader"}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({template:'../dist/index.html'})

	]
	
};

console.log(path.resolve(__dirname,"src/js"))