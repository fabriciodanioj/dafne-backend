import DayBalance from '../models/DayBalance';

class DayBalanceController {
  async store(req, res) {
    try {
      const { day } = req.body;

      let dayBalance = await DayBalance.findOne({ day });

      if (!dayBalance) {
        dayBalance = await DayBalance.create({
          day,
          ownerId: req.userId,
          total: 0,
        });

        return res.send(dayBalance);
      }

      return res.send({ msg: 'This DayBalance already exist' });
    } catch (error) {
      return res.send(error);
    }
  }

  async index(req, res) {
    try {
      const { day } = req.query;

      const dayBalances = await DayBalance.find({ ownerId: req.userId, day });

      return res.send(dayBalances);
    } catch (error) {
      return res.send(error);
    }
  }

  async show(req, res) {
    try {
      const { dayIn, dayOut } = req.query;

      const dayBalances = await DayBalance.find({
        day: {
          $gte: dayIn,
          $lte: dayOut,
        },
      }).sort({ day: 1 });

      return res.send(dayBalances);
    } catch (error) {
      return res.send(error);
    }
  }

  async showAll(req, res) {
    try {
      const dayBalances = await DayBalance.find({ ownerId: req.userId });

      return res.send(dayBalances);
    } catch (error) {
      return res.send(error);
    }
  }
}

export default new DayBalanceController();
