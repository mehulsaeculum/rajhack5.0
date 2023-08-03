// external packages
import passport from 'passport';

// controllers
import * as targetController from '../controller/target.controllers';
import { fileUpload as targetFileUpload } from '../../user/controller/user.controllers';

// middlewares
import * as middleware from '../../../../middleware';

// validators
import {
  targetAddValidation, targetGetBySlugValidation, targetGetValidation, targetStatusUpdatedValidation, targetUpdateValidation,
  exportValidation, fileUploadValidation, paggingValidation
} from '../validator';

// common functions
import { fileUpload } from '../../../../functions/file';

const targetRoute = (app: any) => {
  app.post('/target/pagging', passport.authenticate('jwt', { session: false }), middleware.commonValidator(paggingValidation), targetController.targetPagging);
  app.post('/target/export', passport.authenticate('jwt', { session: false }), middleware.commonValidator(exportValidation), targetController.targetExport);
  app.post('/target', passport.authenticate('jwt', { session: false }), middleware.commonValidator(targetAddValidation), targetController.targetAdd);
  app.post('/target/file/upload', passport.authenticate('jwt', { session: false }), fileUpload.single('file'), middleware.commonValidator(fileUploadValidation), targetFileUpload);
  app.put('/target/:trgt_id', passport.authenticate('jwt', { session: false }), middleware.commonValidator(targetUpdateValidation), targetController.targetUpdate);
  app.put('/target/:trgt_id/status', passport.authenticate('jwt', { session: false }), middleware.commonValidator(targetStatusUpdatedValidation), targetController.targetStatusUpdate);
  app.get('/target/lookup', passport.authenticate('jwt', { session: false }), targetController.targetLookup);
  app.get('/target/:trgt_id', passport.authenticate('jwt', { session: false }), middleware.commonValidator(targetGetValidation), targetController.targetGet);
  app.get('/target/:trgt_slug/slug', passport.authenticate('jwt', { session: false }), middleware.commonValidator(targetGetBySlugValidation), targetController.targetGetBySlug);
  app.delete('/target/:trgt_id', passport.authenticate('jwt', { session: false }), middleware.commonValidator(targetGetValidation), targetController.targetDelete);
}

export { targetRoute as default }
