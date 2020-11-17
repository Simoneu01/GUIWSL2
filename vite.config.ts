import { join } from 'path'
import { UserConfig } from 'vite'
import dotenv from 'dotenv'

dotenv.config({ path: join(__dirname, '.env') })
const root = join(__dirname, 'src/render')

const config: UserConfig = {
  root,
  port: process.env.PORT ? +process.env.PORT : 9000,
  base: './',
  outDir: join(__dirname, 'dist/render'),
  alias: {
    '/@/': root,
  },
  rollupInputOptions: {
    external: ''
  },
  optimizeDeps: {
    auto: true,
    exclude: [
      'electron-is-dev',
      'electron-store',
    ]
  },
  cssPreprocessOptions: {
    sass: {
      modifyVars: {
        '$custom-success-color': '#00c13c',
        '$custom-font-color': '#333333',
        '$custom-info-color': '#999999',
        '$custom-tag-color': '#f5f5f5',
        '$custom-danger-color': '#ee3300',
      }
    }
  }
}

export default config
