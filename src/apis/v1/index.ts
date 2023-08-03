// external packages
import express from 'express';

// module routes
import targetRoute from '../../modules/v1/target/routers/target.routes';
import userRoute from '../../modules/v1/user/routers/user.routes';
import permissionRoute from '../../modules/v1/permission/routers/permission.routes';
import userRoleRoute from '../../modules/v1/user-role/routers/user-role.routes';
import authRoute from '../../modules/v1/auth/routers/auth.routes';
import StateCityRoute from '../../modules/v1/state-city/routers/state-city.routes';

export default () => {
  const api = express.Router();
  targetRoute(api);
  userRoute(api);
  permissionRoute(api);
  userRoleRoute(api);
  authRoute(api);
  StateCityRoute(api);

  api.get('/', (req, res) => {
    res.json({
      service: 'User',
      version: '1.0'
    })
  })

  return api
}
