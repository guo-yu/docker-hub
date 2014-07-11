var dockerhub = require('..');
var hub = new dockerhub;

// lowlevel
hub.get('v1/users', {}, function(err, res, body) {
  // body...
});

// hightlevel
hub.auth({
  namespace: 'turing',
  repository: 'ubuntu'
}, function(err, res, body){
  // body...
});
