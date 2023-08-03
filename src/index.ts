// external packages
import 'dotenv/config';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport'
import swaggerUi from 'swagger-ui-express';
import mongoSanitize from 'express-mongo-sanitize';
import compression from 'compression';
import path from 'path';

// database connection
import './db';

// swagger documentation
import { apiDocumentation } from './swagger';

// api routes setup
import apiV1 from './apis/v1';

// middleware
import jwtStrategy from './middleware/passport';
import * as middleware from './middleware';
import { errorHandler } from './middleware/error';

// environment vars
const PORT = process.env.PORT || 7001
const ENV = process.env.NODE_ENV || 'dev'

// express app instance
const app: Express = express()

// set security HTTP headers
app.use(helmet())

// enable cors
app.use(cors())

// parse JSON request body
app.use(express.json())

// serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// parse URL-encoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data to prevent MongoDB query injection
app.use(mongoSanitize());

// enable response compression
app.use(compression());

// initialize passport for JWT authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// swagger setup for api documentation
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(apiDocumentation, {}));

// api routes for version 1
app.use('/api/v1', apiV1());

// default route to display a welcome message
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Welcome')
})

// global error handler middleware
app.use(middleware.notFoundHandler)
app.use(errorHandler);

// start the server on the specified port
const server = app.listen(PORT, () => {
  console.log(`User Server running on port ${PORT} in ${ENV} environment`)
})

export { app as default, server }
