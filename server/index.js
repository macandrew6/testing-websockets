let server = require('ws').Server;
let s = new server({port: 5000});

s.on('connection', function(ws) {
  ws.on('message', function(message) {
    console.log('Received ', message);

    s.clients.forEach(function e(client) {
      if(client !== ws)
      client.send(message);
    });
    
    // ws.send('From server: ' + message);
  });

  ws.on('close', function() {
    console.log('i lost a client');
  });

  console.log('one more client connected')
});