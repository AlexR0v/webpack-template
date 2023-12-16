import type { Configuration } from 'webpack-dev-server'
import { BuildOptions }       from './types'

export const devServer = (options: BuildOptions): Configuration => {
  return {
    static: options.paths.public,
    port: options.port ?? 3000,
    hot: true,
    historyApiFallback: true,
    watchFiles: ['src/**/*', 'public/**/*'],
  }
}
