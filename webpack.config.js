const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

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
      filename: "remoteEntry.js",
      exposes: {
        // Exponer el Web Component para integrarlo desde el host sin mezclar runtimes
        './VentasWebComponent': './src/bootstrap-ventas-wc.ts',
        // (Opcional) Mantén el módulo si lo necesitas para otras integraciones
        // './VentasModule': './src/app/features/ventas/ventas.module.ts',
      },
        // For remotes (please adjust)
        // name: "remoteV12App",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './/src/app/app.component.ts',
        // },

        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",

        // },

        // Como se consumirá como Web Component, evitamos singletons cruzados de Angular
        // y no compartimos @angular/* para aislar versiones/runtime.
        shared: share({
          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
