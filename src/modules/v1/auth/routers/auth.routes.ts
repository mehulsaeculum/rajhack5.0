// external packages
import passport from 'passport';

// controllers
import * as authController from '../controller/auth.controllers';
// common middleware
import * as middleware from '../../../../middleware';
// validator
import { loginValidation, forgotPassword, resetPassword, resetLink } from '../validator/index';

const authRoute = (app: any) => {
  app.post('/auth/login', middleware.commonValidator(loginValidation), authController.login);
  app.post('/auth/forgot-password', middleware.commonValidator(forgotPassword), authController.forgotPassword);
  app.put('/auth/reset-password', middleware.commonValidator(resetPassword), authController.resetPassword);
  app.get('/auth/validate/reset-link', middleware.commonValidator(resetLink), authController.resetLinkValidate);
  app.get('/auth/validate/token', passport.authenticate('jwt', { session: false }), authController.tokenValidate);
  app.get('/auth/logout', passport.authenticate('jwt', { session: false }), authController.logout);
}

export default authRoute;
