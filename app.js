const http = require("http");
const url = require("url");
const querystring = require("querystring");
const httpServer = http.createServer((req, res) => {
  const query = querystring.parse(url.parse(req.url).query);
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>Bonjour " + query.id + "</h1>");
  res.end();
});
httpServer.listen(3000, () => console.log(`Server running at port 3000`));
