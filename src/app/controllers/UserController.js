import bcrypt from 'bcrypt';

import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const { email, password } = await req.body;

      const checkEmail = await User.findOne({ email });

      if (email.length < 5) {
        res.send({ error: 'Please, insert a e-mail.' });
      }

      if (!checkEmail) {
        const salt = bcrypt.genSaltSync(10);

        const passwordToSave = bcrypt.hashSync(password, salt);

        const user = await User.create({
          email,
          password: passwordToSave,
        });

        return res.json(user);
      }

      return res.send({ error: 'E-mail already exists' });
    } catch (error) {
      return res.status(400).send({ error: 'Registration failed' });
    }
  }

  async index(req, res) {
    try {
      const users = await User.find({});
      return res.send(users);
    } catch (error) {
      return res.send(error);
    }
  }

  async destroy(req, res) {
    try {
      const { email } = req.body;
      const { _id } = await User.findOne({ email });

      await User.findByIdAndDelete(_id);

      return res.send(`User with email: ${email} was deleted with success`);
    } catch (error) {
      return res.send(error);
    }
  }
}

export default new UserController();
