var apis = require('./apis');

module.exports = hub;

function hub() {
  this.host = 'https://index.docker.io';
  return new sdk(this.host, apis, auth || {});
}
