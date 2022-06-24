import dbConnect from "../../../utils/dbConnect";
import Card from "../../../models/Card";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const cards = await Card.find({});

        res.status(200).json({ success: true, data: cards });
      } catch (e) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const card = await Card.create(req.body);

        res
          .status(201)
          .json({ success: true, RequestId: card._id, Amount: card.Amount });
      } catch (e) {
        res.status(400).json({ error: e.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
