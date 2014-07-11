var apis = require('./apis');

module.exports = hub;

function hub() {
  this.host = 'https://index.docker.io';
  this.apiVersion = 'v1';
  return new sdk(this.host, apis[this.apiVersion], {});
}
