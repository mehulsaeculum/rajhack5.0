// external packages
import { Request } from 'express';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import UserLoginModel from '../models/user.login.model';  // user-login model
import { getSessionData } from '../modules/v1/auth/services/auth.service';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.DEFAULT_SECRET,
  passReqToCallback: true
}

const jwtStrategy = new JwtStrategy(options, async (req: Request, jwtPayload: any, callback: any) => {
  try {
    const user = await UserLoginModel.findOne({ usrlg_access_code: jwtPayload.code, usrlg_fk_user_id: jwtPayload.user_id, usrlg_logout: false, usrlg_expired_at: { $gt: new Date() } });
    if (!user) return callback(null, false)
    const userData = await getSessionData(jwtPayload)
    return callback(null, userData)
  } catch (err) {
    return callback(null, false)
  }
})

export default jwtStrategy