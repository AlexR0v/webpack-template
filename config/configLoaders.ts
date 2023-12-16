import MiniCssExtractPlugin   from 'mini-css-extract-plugin'
import { ModuleOptions }      from 'webpack'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { BuildOptions }       from './types'

export const configLoaders = (options: BuildOptions): ModuleOptions['rules'] => {
  
  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  }
  
  const svgLoader = {
    test: /\.svg$/i,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  }
  
  const tsLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        // options: {
        //   transpileOnly: true,
        //   getCustomTransformers: () => ({
        //     before: [ReactRefreshTypeScript()].filter(Boolean),
        //   }),
        // },
      },
    ],
    exclude: /node_modules/,
  }
  
  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader, {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: options.mode === 'development' ? '[path][name]__[local]' : '[hash:base64:8]',
          },
        },
      }, 'sass-loader',
    ],
  }
  
  return [
    assetLoader,
    svgLoader,
    tsLoader,
    styleLoader,
  ]
}
