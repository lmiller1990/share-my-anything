import path from 'path'
import webpack from 'webpack'

import { WDS_PORT } from './src/shared/config'
import { isProd } from './src/shared/util'

export default {
	entry: [
		'./src/client'
	],
	output: {
		filename: 'js/bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: isProd ? '/static/' : `http://localhost:${WDS_PORT}/dist/`,
	},
	module: {
		rules: [
			{ 
				test: /\.vue$/, loader: 'vue-loader', options: {
					loaders: {
						js: 'babel-loader'
					}
				} 
			},
			{
				test: /\.js/, use: 'babel-loader', exclude: /node_modules/
			}
		]
	},
	devtool: isProd ? false : 'source-map',
	resolve: {
		extensions: ['.js', '.vue']
	},
	devServer: {
		port: WDS_PORT,
		hot: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}
