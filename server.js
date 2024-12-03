import http from "http";

const PORT = 3000;

const rotas = {
  "/": "Curso de express api",
  "/livros": "Entrei na rotas livros",
  "/autores": "Entrei na rotas autores",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/pain" });
  res.end(rotas[req.url]);
});

server.listen(PORT, () => {
  console.log("servidor escutando!");
});
