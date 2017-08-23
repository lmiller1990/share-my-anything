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
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							// path where the images will be saved
							// name: 'assets/img/[name].[ext]'
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								quality: 65
							},
							pngquant:{
								quality: "10-20",
								speed: 4
							},
							svgo:{
								plugins: [
									{
										removeViewBox: false
									},
									{
										removeEmptyAttrs: false
									}
								]
							},
							gifsicle: {
								optimizationLevel: 7,
								interlaced: false
							},
							optipng: {
								optimizationLevel: 7,
								interlaced: false
							}
						}
					}
				]
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
