// __filename => corresponde ao nome do arquivo que está sendo excutado contendo todo o seu diretório.
// __dirname => corresponde ao nome da pasta na qual o arquivo está sendo executado

const path = require("path");
const fs = require("fs");

// Pegar nome de um arquivo
console.log("Nome do arquivo:", path.basename(__filename));

// Pegar extensão do arquivo
console.log("Extensão do arquivo:", path.extname(__filename));

// Pegar nome da pasta
console.log("Nome da pasta:", path.basename(__dirname));

// Criar arquivo no diretório do arquivo atual
fs.writeFile(path.join(__dirname, "message.txt"), "Hello World!", () => console.log("criado com sucesso!"));