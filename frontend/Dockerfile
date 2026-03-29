FROM node:20-alpine

WORKDIR /app/app

COPY app/package*.json ./
RUN npm install

COPY app .

EXPOSE 4200

CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]