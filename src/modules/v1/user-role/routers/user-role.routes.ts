// external packages
import passport from 'passport'

// controllers
import * as userRoleController from '../controller/user-role.controllers';

// middlewares
import * as middleware from '../../../../middleware';

// validators
import {
  userRoleAddValidation, userRoleGetValidation, userRoleStatusUpdateValidation, userRoleUpdateValidation, exportValidation,
  paggingValidation
} from '../validator'

const userRoleRoute = (app: any) => {
  app.post('/role/pagging', passport.authenticate('jwt', { session: false }), middleware.commonValidator(paggingValidation), userRoleController.userRolePagging)
  app.post('/role/export', passport.authenticate('jwt', { session: false }), middleware.commonValidator(exportValidation), userRoleController.userRoleExport)
  app.post('/role', passport.authenticate('jwt', { session: false }), middleware.commonValidator(userRoleAddValidation), userRoleController.userRoleAdd)
  app.put('/role/:usrl_id', passport.authenticate('jwt', { session: false }), middleware.commonValidator(userRoleUpdateValidation), userRoleController.userRoleUpdate)
  app.put('/role/:usrl_id/status', passport.authenticate('jwt', { session: false }), middleware.commonValidator(userRoleStatusUpdateValidation), userRoleController.userRoleStatusUpdate)
  app.get('/role/lookup', passport.authenticate('jwt', { session: false }), userRoleController.userRoleLookup)
  app.get('/role/:usrl_id', passport.authenticate('jwt', { session: false }), middleware.commonValidator(userRoleGetValidation), userRoleController.userRoleGet)
  app.delete('/role/:usrl_id', middleware.commonValidator(userRoleGetValidation), userRoleController.userRoleDelete)
}

export { userRoleRoute as default }
