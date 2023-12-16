import path                      from 'path'
import { Configuration }         from 'webpack'
import { configWebpack }         from './config/configWebpack'
import { BuildMode, BuildPaths } from './config/types'

type Mode = 'development' | 'production'

export interface Env {
  mode?: BuildMode
  port?: number
  analyzer?: boolean
  platform?: 'desktop' | 'mobile'
}

export default (env: Env): Configuration => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
  }
  return configWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer,
    platform: env.platform ?? 'desktop'
  })
}
