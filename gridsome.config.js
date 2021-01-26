// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require("tailwindcss")

module.exports = {
  siteName: 'Gridsome',
  templates: {
    ChiselStage: '/stages/:id'
  },
  plugins: [
    {
      use: "gridsome-source-chisel",
      options: {
        typeName: "Chisel",
        appId: process.env.CHISEL_APP_ID,
        serverURL: process.env.CHISEL_SERVER_URL,
        masterKey: process.env.CHISEL_MASTER_KEY,
        siteId: process.env.CHISEL_SITE_ID
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ],
      },
    },
  }
}
