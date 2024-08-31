FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

# Define the command to run the app
CMD ["npm", "start"]