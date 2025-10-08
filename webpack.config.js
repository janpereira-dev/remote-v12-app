const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, 'tsconfig.json'),[]);

module.exports = {
  output: {
    uniqueName: "remoteV12App",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'remoteV12App',
      library: { type: 'var', name: 'remoteV12App' },
      filename: "remoteEntry.js",
      exposes: {
        './VentasWebComponent': './src/bootstrap-ventas-wc.ts',
      },
      shared: share({
        ...sharedMappings.getDescriptors()
      })
    }),
    sharedMappings.getPlugin()
  ],
};
