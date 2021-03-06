
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	mode: 'development',
	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	resolve: {
        alias: {
            components: path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.jsx'],
    },
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [ 'babel-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
		template: path.resolve( __dirname, 'public/index.html' ),
		filename: 'index.html'
	}),
		new webpack.ProvidePlugin({
			process: 'process/browser',
			Buffer: ['buffer', 'Buffer'],
		}),
	],
	devServer: {
		port: 4000
	  },
}