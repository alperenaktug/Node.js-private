let http = require("http");

let server = http.createServer((request, response) => {
  // console.log(request.url, request.method);
  // console.log(response.statusCode);

  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;
  response.statusMessage = "OK";

  response.write("<h1>ana sayfa</h1>");
  response.write("<p>urunler</p>");

  response.end();
});

server.listen(3000);

console.log("node js server at port 3000");

// Get request de sayfasyı talep etmek  bilgi gelsin
// Post request de bir form doldurma , ürün ekleme formu
// doldurduğumda kullanılır.

// 200 OK  çalışıyor tamamdır problem yok
// 400 BAD Request kullanıcı yapılan sorgu hatası client
// 404  Not Found Server da olmayan bir kaynak talebi
// 500 Server Internal server kaynaklı hata
