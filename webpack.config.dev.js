const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
	name: 'browser',
	mode: 'development',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].bundle.js',
		publicPath: '/'
	},
	devServer: {
		contentBase:'./build',
		hot: true,
		historyApiFallback: true,
		stats: {
			modules: false,
			chunks: false
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
			inject: true
		})
	]
}