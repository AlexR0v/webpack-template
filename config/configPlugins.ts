import HtmlWebpackPlugin               from 'html-webpack-plugin'
import MiniCssExtractPlugin            from 'mini-css-extract-plugin'
import ForkTsCheckerWebpackPlugin      from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin       from '@pmmmwh/react-refresh-webpack-plugin'
import path                            from 'path'
import { Configuration, DefinePlugin } from 'webpack'
import { BuildOptions }                from './types'

export const configPlugins = ({ mode, platform, paths }: BuildOptions): Configuration['plugins'] => {
  
  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: paths.html, favicon: path.resolve(paths.public, 'favicon.ico') }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].css',
      chunkFilename: 'assets/css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
      __ENV__: JSON.stringify(mode),
    }),
  ]
  
  if(mode === 'development') {
    /** Выносит проверку типов в отдельный процесс: не нагружая сборку */
    plugins.push(new ForkTsCheckerWebpackPlugin())
    //plugins.push(new ReactRefreshWebpackPlugin())
  }
  
  return plugins
}
