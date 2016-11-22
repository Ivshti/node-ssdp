//var path = process.env.SSDP_COV ? './lib-cov/' : './lib/'

module.exports = {
  Server: require('./lib/server'),
  Client: require('./lib/client'),
  Base: require('./lib/index')
}
