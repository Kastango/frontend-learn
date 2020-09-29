module.exports = {
  presets: [
      "@babel/preset-env", // importexport, arrowfunc
      "@babel/preset-react" //funcionalidades do react
  ],
  plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-runtime'
  ]
}