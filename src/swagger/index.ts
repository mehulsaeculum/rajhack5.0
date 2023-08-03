// module swagger documentation
import User from '../modules/v1/user/swagger/user.swagger';
import Auth from '../modules/v1/auth/swagger/auth.swagger';
import Target from '../modules/v1/target/swagger/target.swagger';
import UserRole from '../modules/v1/user-role/swagger/user-role.swagger';
import StateCity from '../modules/v1/state-city/swagger/state-city.swagger';
import Permission from '../modules/v1/permission/swagger/permission.swagger';

const apiDocumentation = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'Swagger for Jagran backend',
    description: 'User micro-service',
  },
  servers: [
    {
      url: process.env.BACKEND_URL,
      description: 'Development Server',
    },
    {
      url: process.env.BACKEND_LOCAL_URL,
      description: 'Local Server',
    }
  ],
  paths: { ...User, ...Auth, ...Target, ...Permission, ...UserRole, ...StateCity },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      }
    }
  }
};

export { apiDocumentation }