const http = require('http');
const port = process.env.PORT || 3000;

let appInsights = require('applicationinsights');
appInsights.setup("InstrumentationKey=6389b105-d371-4cef-856b-216325d4444c;IngestionEndpoint=https://eastus-8.in.applicationinsights.azure.com/;LiveEndpoint=https://eastus.livediagnostics.monitor.azure.com/").start();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
