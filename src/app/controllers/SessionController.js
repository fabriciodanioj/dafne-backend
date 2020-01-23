import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { secret } from '../services/auth.json';

import User from '../models/User';

class SessionController {
  async index(req, res) {
    try {
      const { email, password } = await req.body;

      const user = await User.findOne({ email }).select('+password');

      if (!user) {
        return res.status(401).send({ error: 'User not found' });
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return res.status(401).send({ error: 'Password is wrong' });
      }

      user.password = undefined;

      const token = jwt.sign({ id: user.id }, secret, {
        expiresIn: 86400,
      });

      return res.json({ user, token });
    } catch (error) {
      return res.send(error);
    }
  }
}

export default new SessionController();
