import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'
import vitePluginImp from 'vite-plugin-imp'
import lessToJS from 'less-vars-to-js';
import fs from 'fs';
import legacy from '@vitejs/plugin-legacy'

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/styles/variables.less'), 'utf8'),
);

// https://vitejs.dev/config/
export default defineConfig(config => {

  return {
    envDir: './src/envs',
    envPrefix: ['VITE_'],
    plugins: [
      react(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          // /\.vue$/, /\.vue\?vue/, // 本项目不使用 .vue
          /\.md$/, // .md
        ],
        imports: ['react', 'react-router-dom'],
        defaultExportByFilename: false,
        dirs: [
          './src/AutoImport/hooks',
          './src/AutoImport/components' // only root modules
          // './composables/**', // all nested modules
        ],
        dts: './src/AutoTypes/auto-imports.d.ts',
        eslintrc: {
          enabled: true,
          filepath: './src/AutoTypes/.eslintrc-auto-import.json',
          globalsPropValue: true
        }
      }),
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      }),
      vitePluginImp({
        libList: [
          {
            libName: "antd",
            style: (name) => `antd/es/${name}/style`,
          },
        ],
      }),
    ],
    css: {
      // css module 配置
      modules: {
        generateScopedName: '[name]__[local]__[hash:base64:5]',
        hashPrefix: 'prefix'
      },
      // less 配置
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: themeVariables,
        },
      }
    },
    // 别名配置
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@/store': path.resolve(__dirname, './src/store')
      }
    },
    server: {
      host: '127.0.0.1',
      port: 5173,
      open: false,
      proxy: {
        '/api': {
          target: '后端接口域名',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
    }
  }
})
