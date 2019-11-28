// const jsreport = require('jsreport')()
const jsreport = require('jsreport')({
  httpPort: process.env.PORT || 3456
})

jsreport.use(require('jsreport-chrome-pdf')(
  {
    launchOptions: {
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ]
    }
  }
  ));

if (process.env.JSREPORT_CLI) {
  // export jsreport instance to make it possible to use jsreport-cli
  module.exports = jsreport
} else {
  jsreport.init().then(() => {
    // running
  }).catch((e) => {
    // error during startup
    console.error(e.stack)
    process.exit(1)
  })
}
