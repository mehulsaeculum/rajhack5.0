// external packages
import passport from 'passport';

// middlewares
import * as middleware from '../../../../middleware';

// controllers
import * as permissionController from '../controller/permission.controllers';

// validators
import { permissionAddValidation, permissionGetValidation, permissionStatusUpdateValidation, permissionUpdateValidation, paggingValidation } from '../validator';

const permissionRoute = (app: any) => {
  app.post('/permission/pagging', passport.authenticate('jwt', { session: false }), middleware.commonValidator(paggingValidation), permissionController.permissionPagging);
  app.post('/permission', passport.authenticate('jwt', { session: false }), middleware.commonValidator(permissionAddValidation), permissionController.permissionAdd);
  app.put('/permission/:per_id/status', passport.authenticate('jwt', { session: false }), middleware.commonValidator(permissionStatusUpdateValidation), permissionController.permissionStatusUpdate);
  app.get('/permission/all', passport.authenticate('jwt', { session: false }), permissionController.permissionAll);
  app.get('/permission/lookup', passport.authenticate('jwt', { session: false }), permissionController.permissionLookup);
  app.put('/permission/:per_id', passport.authenticate('jwt', { session: false }), middleware.commonValidator(permissionUpdateValidation), permissionController.permissionUpdate);
  app.get('/permission/:per_id', passport.authenticate('jwt', { session: false }), middleware.commonValidator(permissionGetValidation), permissionController.permissionGet);
  app.delete('/permission/:per_id', passport.authenticate('jwt', { session: false }), middleware.commonValidator(permissionGetValidation), permissionController.permissionDelete);
}

export { permissionRoute as default }
