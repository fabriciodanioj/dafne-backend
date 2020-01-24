/* eslint-disable no-plusplus */
import Order from '../models/Order';
import Product from '../models/Product';
import DayBalance from '../models/DayBalance';

class OrderController {
  async store(req, res) {
    try {
      const { refDay, products } = req.body;

      const prices2 = await products.reduce(async (acc, p) => {
        const totalPrice = await acc;
        const { price } = await Product.findById(p.id);
        const { amount } = p;

        return [...totalPrice, price * amount];
      }, []);

      const sum = prices2.reduce((acc, cur) => {
        return acc + cur;
      }, 0.0);

      const { _id, orders } = await DayBalance.findOne({
        day: refDay,
        ownerId: req.userId,
      });

      const order = await Order.create({
        refDay: _id,
        value: sum,
        products: products.reduce((acc, p) => [...acc, p.id], []),
      });

      await DayBalance.findByIdAndUpdate(
        { _id },
        {
          orders: [...orders, order],
        }
      );

      return res.send(order);
    } catch (error) {
      return res.send(error);
    }
  }

  async show(req, res) {
    try {
      const { orderId } = req.query;

      const order = await Order.findById(orderId);

      return res.send(order);
    } catch (error) {
      return res.send(error.message);
    }
  }
}

export default new OrderController();
