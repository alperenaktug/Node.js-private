let http = require("http");

let server = http.createServer((request, response) => {
  // console.log(request.url);

  if (request.url == "./") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(
      `<html>
        <head>
          <title>anasayfa</title>
          <meta charset ="utf-8">
        </head>
        <body>
          <h1>Anasayfa</h1>
        </body>
      </html>`
    );
    response.end();
  } else if (request.url == "/blogs") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(
      `<html>
        <head>
          <title>blogs</title>
          <meta charset ="utf-8">
        </head>
        <body>
          <h1>blog listesi</h1>
        </body>
      </html>`
    );
    response.end();
  } else if (request.url == "/product") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(
      `<html>
        <head>
          <title>product</title>
          <meta charset ="utf-8">
        </head>
        <body>
          <h1>product listesi</h1>
        </body>
      </html>`
    );
    response.end();
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write(
      `<html>
          <head>
            <title>404</title>
            <meta charset ="utf-8">
          </head>
          <body>
            <h1>Aradığınız kaynak bulunamadı</h1>
          </body>
        </html>`
    );
    response.end();
  }
});

server.listen(3001);

console.log("node js server at port 3001");
