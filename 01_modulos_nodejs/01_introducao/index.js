// Módulos => fs : file system
// readFile => ler arquivo
// writeFile => escrever arquivo

const fs = require("fs");

//             Nome         Conteúdo
fs.writeFile('Myfile.txt', "Welcome to FSC!", () => console.log("Arquivo criado com sucesso!"));