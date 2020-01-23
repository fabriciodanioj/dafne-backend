import Product from '../models/Product';

class ProductController {
  async store(req, res) {
    try {
      const { name, price } = req.body;
      const { ownerId } = req.query;

      let product = await Product.findOne({ name });

      if (!product) {
        product = await Product.create({
          name,
          price,
          ownerId,
        });

        return res.send(product).populate();
      }

      return res.send({ msg: 'This product already exist' });
    } catch (error) {
      return res.send(error);
    }
  }

  async index(req, res) {
    try {
      const { ownerId } = req.query;

      const products = await Product.find({ ownerId });

      return res.send(products);
    } catch (error) {
      return res.send(error);
    }
  }

  async destroy(req, res) {
    try {
      const { _id } = req.body;
      const { name } = await Product.findById({ _id });

      await Product.findByIdAndDelete(_id);

      return res.send(`${name} was deleted with success`);
    } catch (error) {
      return res.send(error);
    }
  }

  async update(req, res) {
    try {
      const { _id, price } = req.body;

      let product = await Product.findByIdAndUpdate(
        { _id },
        {
          price,
        }
      );

      product = await Product.findById(_id);

      return res.send(product);
    } catch (error) {
      return res.send(error);
    }
  }
}

export default new ProductController();
