import path                                from 'path'
import { Configuration }                   from 'webpack'
import { configLoaders }                   from './configLoaders'
import { configPlugins }                   from './configPlugins'
import { configResolve }                   from './configResolve'
import { devServer }                       from './devServer'
import { BuildOptions }                    from './types'

export const configWebpack = (options: BuildOptions): Configuration => {
  
  const {mode, paths} = options
  const isDev = mode === 'development';
  
  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
    devServer: isDev ? devServer(options) : undefined,
    module: {
      rules: configLoaders(options),
    },
    resolve: configResolve(options),
    output: {
      path: paths.output,
      filename: 'assets/js/main.[contenthash:8].js',
      clean: true,
    },
    plugins: configPlugins(options),
  }
}
