FROM node:18

WORKDIR /app
COPY . .

RUN npm install
RUN apt-get update && apt-get install -y wget gnupg2
RUN npm install puppeteer

CMD ["node", "server.js"]
