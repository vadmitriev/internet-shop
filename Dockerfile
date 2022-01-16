FROM node
EXPOSE 3000
WORKDIR /shop
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production
COPY . .
RUN npm run build
CMD ["npm", "start"]