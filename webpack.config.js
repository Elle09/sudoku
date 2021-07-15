var path = require('path');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new OpenBrowserPlugin({ url: 'http://localhost:3000' }),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['react-hot', 'babel-loader'],
			include: path.join(__dirname, 'src')
		}]
	}
};
