let server = require('ws').Server;
let s = new server({port: 5000});

s.on('connection', function(ws) {
  ws.on('message', function(message) {
    message = JSON.parse(message);

    if(message.type === 'name') {
      ws.personName = message.data;
    }

    s.clients.forEach(function e(client) {
      if(client !== ws)
        client.send(JSON.stringify({
          name: ws.personName,
          data: message.data
        }));
    });
    
    // ws.send('From server: ' + message);
  });

  ws.on('close', function() {
    console.log('i lost a client');
  });

  console.log('one more client connected')
});