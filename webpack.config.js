const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	name: 'browser',
	entry: "./index.js",
	mode: 'production',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].bundle.js',
		publicPath: '/'
	},
	module:{
		rules:[
			{
				test: /\.js$/,
				use:['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use:['style-loader', 'css-loader']
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: './index.html',
			inject: true
		})
	],
	resolve: {
		extensions: ['.js']
	}
}