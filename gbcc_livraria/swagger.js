const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API da Biblioteca',
      version: '1.0.0',
      description: 'Documentação da API da biblioteca universitária',
      contact: {
        name: 'Christian',
        email: 'c@example.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000/api',  // URL da sua API
      },
    ],
  },
  apis: ['./routes/*.js', './controllers/*.js'], // Caminhos para as rotas e controllers
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
