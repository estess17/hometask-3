FROM node:16

EXPOSE 3000

COPY package.json package-lock*.json ./

COPY . .

RUN npm install

CMD ["npm", "run", "build"]
CMD ["npm", "start"]