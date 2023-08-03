// external packages
import passport from 'passport';

// controllers
import * as userController from '../controller/user.controllers';

// middlewares
import * as middleware from '../../../../middleware';

// common functions
import { fileUpload } from '../../../../functions/file';

// validators
import {
  userGetValidation, userStatusUpdateValidation, userUpdateValidation, registerValidation, paggingValidation, exportValidation,
  userProfileUpdate, userPasswordUpdate, fileUploadValidation
} from '../validator/index';

const userRoute = (app: any) => {
  app.post('/user/pagging', passport.authenticate('jwt', { session: false }), middleware.commonValidator(paggingValidation), userController.userPagging);
  app.post('/user/export', passport.authenticate('jwt', { session: false }), middleware.commonValidator(exportValidation), userController.userExport);
  app.post('/user', passport.authenticate('jwt', { session: false }), middleware.commonValidator(registerValidation), userController.userInsert);
  app.post('/user/bulk', passport.authenticate('jwt', { session: false }), userController.bulkUserGet);
  app.post('/user/file/upload', passport.authenticate('jwt', { session: false }), fileUpload.single('file'), middleware.commonValidator(fileUploadValidation), userController.fileUpload);

  app.get('/user/lookup', passport.authenticate('jwt', { session: false }), userController.userLookup);
  app.get('/user/profile', passport.authenticate('jwt', { session: false }), userController.userProfileGet);
  app.get('/user/:user_id', passport.authenticate('jwt', { session: false }), middleware.commonValidator(userGetValidation), userController.userById);

  app.put('/user/:user_id', passport.authenticate('jwt', { session: false }), middleware.commonValidator(userUpdateValidation), userController.userUpdate);
  app.put('/user/:user_id/profile', passport.authenticate('jwt', { session: false }), middleware.commonValidator(userProfileUpdate), userController.userProfileUpdate);
  app.put('/user/:user_id/password', passport.authenticate('jwt', { session: false }), middleware.commonValidator(userPasswordUpdate), userController.userPasswordUpdate);
  app.put('/user/:user_id/status', passport.authenticate('jwt', { session: false }), middleware.commonValidator(userStatusUpdateValidation), userController.userStatusUpdate);
  app.put('/user/:user_id/target/:trgt_id/default', passport.authenticate('jwt', { session: false }), middleware.commonValidator(userGetValidation), userController.userTargetUpdate);

  app.delete('/user/:user_id', passport.authenticate('jwt', { session: false }), middleware.commonValidator(userGetValidation), userController.userDelete);
}

export default userRoute;
