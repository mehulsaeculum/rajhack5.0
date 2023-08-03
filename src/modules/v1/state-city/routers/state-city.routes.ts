import passport from 'passport';
import * as stateCityController from '../controller/state-city.controllers';
import * as middleware from '../../../../middleware';
import { cityLookup } from '../validator/index';

const authRoute = (app: any) => {

  app.get('/state/lookup', passport.authenticate('jwt', { session: false }), stateCityController.stateLookup);

  app.get('/state/:state_id/city/lookup', passport.authenticate('jwt', { session: false }), middleware.commonValidator(cityLookup), stateCityController.cityLookup);

}

export default authRoute;
