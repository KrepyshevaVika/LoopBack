'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  //var router = server.loopback.Router();
  //router.get('/', server.loopback.status());
  //server.use(router);
  //server.use(server.loopback.static('../client'));
  server.get('/ping', function(req, res) {
    res.send('pong');
  });
};
