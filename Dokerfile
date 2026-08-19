FROM: node 
WORKDIR: ./app

COPY package.json .

COPY . .

RUN npm installl 

EXPOSE 3000

CMD[ "npm", "start"]