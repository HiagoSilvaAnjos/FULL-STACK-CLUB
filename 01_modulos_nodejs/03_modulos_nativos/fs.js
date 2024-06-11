// appendFile => Acrescentar arquivo

const fs = require("fs");

const path = require("path");

// Criar uma pasta em um diretório
fs.mkdir(path.join(__dirname, "assets"), () => console.log("Criado com sucesso"));

// Criar um arquivo nessa nova pasta
fs.writeFile(path.join(__dirname, "assets", "teste.txt"), "teste", () => console.log("Criado com sucesso"));

// Adicionar conteúdo a um arquivo
fs.appendFile(path.join(__dirname, "assets", "teste.txt"), "\nsay heloooo", () => console.log("Acrescentado com sucesso"));

// ler conteúdo de um arquivo
fs.readFile(path.join(__dirname, "assets", "teste.txt"), "utf-8", (err, data) => console.log(data));