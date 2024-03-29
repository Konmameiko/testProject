/*
 * @Description:
 * @Author: KonmaMeiko
 * @Date: 2023-05-22 00:00:51
 * @lastEditTime: Do not edit
 * @LastEditors: KonmaMeiko
 */
import { defineConfig } from 'umi';
import routes from './src/Routers/router';
import { theme } from 'antd';
const { defaultAlgorithm, defaultSeed } = theme;
const mapToken = defaultAlgorithm(defaultSeed);

export default defineConfig({
	// nodeModulesTransform: {
	// 	type: 'none',
	// },

	proxy: {
		'/local': {
			target: '127.0.0.1:/8080',
			changeOrigin: true,
			secure: false,
		},

		'/proxyTest': {
			target: 'http://localhost:5000',
			changeOrigin: true,
			pathRewrite: { '^/proxyTest': '' },
			secure: false,
		},
	},
	// favicon: '/ico/icon.ico',
	routes: routes,
	fastRefresh: true,
	alias: {
		'@': require('path').resolve(__dirname, './src'),
		'@pages': require('path').resolve(__dirname, './src/pages'),
	},
	antd: {
		import: false,
	},
	// 引入 MP3 mp4 wav格式的视频
	chainWebpack(config: any) {
		config.module
			.rule('media')
			.test(/\.(mp(3|4)|wav|m4a)$/)
			.use('file-loader')
			.loader(require.resolve('file-loader'))
			.options({
				esModule: false,
			});
	},
	lessLoader: {
		modifyVars: mapToken,
	},
});
