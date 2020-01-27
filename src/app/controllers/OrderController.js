import Order from '../models/Order';
import Product from '../models/Product';
import DayBalance from '../models/DayBalance';

class OrderController {
  async store(req, res) {
    try {
      const { refDay, products } = req.body;

      const prices = await products.reduce(async (acc, p) => {
        const totalPrice = await acc;
        const { price } = await Product.findById(p.id);
        const { amount } = p;

        return [...totalPrice, price * amount];
      }, []);

      const sum = prices.reduce((acc, cur) => {
        return acc + cur;
      }, 0.0);

      const { _id, orders, total } = await DayBalance.findOne({
        day: refDay,
        ownerId: req.userId,
      });

      const productsInfo = await products.reduce(async (acc, p) => {
        const { price, name } = await Product.findById(p.id);
        const { amount } = p;

        return [...(await acc), { name, price, amount }];
      }, []);

      const order = await Order.create({
        refDay: _id,
        value: sum,
        products: productsInfo,
      });

      await DayBalance.findByIdAndUpdate(
        { _id },
        {
          orders: [...orders, order],
          total: total + sum,
        }
      );

      return res.send(order);
    } catch (error) {
      return res.send(error);
    }
  }

  async index(req, res) {
    try {
      const { orderId } = req.query;

      const order = await Order.findById(orderId);

      return res.send({ order });
    } catch (error) {
      return res.send(error.message);
    }
  }

  async show(req, res) {
    try {
      const { day } = req.query;

      const d = await DayBalance.findOne({ day });

      const orders = await d.orders.reduce(async (acc, o) => {
        const initialState = await acc;
        const order = await Order.findById(o);

        return [...initialState, order];
      }, []);

      return res.send(orders);
    } catch (error) {
      return res.send(error.message);
    }
  }

  async delete(req, res) {
    try {
      const { orderId } = req.body;

      await Order.findByIdAndDelete(orderId);

      return res.send({ msg: `Order was deleted with success` });
    } catch (error) {
      return res.send(error.message);
    }
  }
}

export default new OrderController();
