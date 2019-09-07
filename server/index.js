let server = require('ws').Server;
let s = new server({port: 5000});

s.on('connection', function(ws) {
  ws.on('message', function(message) {
    console.log('Received ', message);
    ws.send('From server: ' + message);
  });

  console.log('one more client connected')
});