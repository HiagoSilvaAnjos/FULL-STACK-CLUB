# Utilize o Node com linux
FROM  node:19-alpine

# Copie o package.json para dentro da imagem neste diretório
COPY package.json /app/

# Copie o src para dentro da imagem neste diretório
COPY src /app/

# entre dentro deste diretório app
WORKDIR /app

# rode 
RUN npm install

# é o ultimo comando que o container vai executar
CMD ["node", "server.js"]
