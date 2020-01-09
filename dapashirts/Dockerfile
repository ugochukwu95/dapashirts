FROM node:10.14.1
RUN mkdir -p /usr/src/dapashirts
COPY build /usr/src/dapashirts/build
COPY server.js /usr/src/dapashirts/
COPY config /usr/src/dapashirts/config
COPY routes /usr/src/dapashirts/routes
COPY models /usr/src/dapashirts/models
COPY controllers /usr/src/dapashirts/controllers
COPY deploy-package.json /usr/src/dapashirts/package.json
WORKDIR /usr/src/dapashirts
RUN echo 'package-lock=false' >> .npmrc
RUN npm install
EXPOSE 80
CMD ["node", "server.js", "80"]