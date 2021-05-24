module.exports = {
  presets: [['module:metro-react-native-babel-preset', {useTransformReactJSXExperimental: true}]],
  plugins: [
    ['module:react-native-dotenv'],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic'
      }
    ],
    ['transform-inline-environment-variables'],
    [
      'module-resolver',
      {
        root: ['src'],
        extensions: ['.js', '.ts', 'tsx', '.ios.js', '.ios.ts', '.android.js', '.android.ts', '.json'],
        alias: {
          src: './src'
        }
      }
    ]
  ]
}
