import express from 'express';

import { graphql } from 'graphql';
import bodyParser from 'body-parser';
import schema from './schema';

let app = express();
let PORT = 3003;

// parse POST body as text
app.use(bodyParser.text({
  type: 'application/graphql'
}));

app.post('/graphql/hello', (req, res) => {
  res.send('\nHello! Many greetings from GraphQL!\nAdam\n\n'+server.address().address+'\n\n');
});

app.post('/graphql', (req, res) => {
  // execute GraphQL!
  graphql(schema, req.body)
    .then((result) => {
      res.send(JSON.stringify(result, null, 2));
    });
});

// 127.0.0.1
// 192.168.4.12
let server = app.listen({
  port: PORT
  // , host: '192.168.4.12'
}, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);
});