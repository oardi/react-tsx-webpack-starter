import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import type { Configuration } from 'webpack';

const config: Configuration = {
	context: path.resolve(__dirname, './src'),
	entry: { app: './index.tsx' },
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				use: 'ts-loader',
			},
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	plugins: [
		new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
			title: 'React TSX Webpack Starter',
			filename: 'index.html',
			chunks: ['vendors', 'app'],
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css',
			chunkFilename: 'style.css',
		}),
	],
	output: {
		filename: '[name].js',
		chunkFilename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
};

export default config;
