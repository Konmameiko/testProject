import { defineConfig } from 'umi';
import routes from './src/Routers/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },

  proxy: {
    '/local': {
      target: '127.0.0.1:/8080',
      changeOrigin: true,
      secure: false,
    },
    
    '/proxyTest': {
      target:'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: { "^/proxyTest" : "" },
      secure: false,
    }
  },
  // hash: true,
  // history: {
  //   type: 'hash',
  // },
  //links:[{rel:"icon",href:'/ico/icon.ico'},],
  favicon:'/ico/icon.ico',
  routes: routes,
  fastRefresh: {},
});