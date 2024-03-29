import dbConnect from "../../../utils/dbConnect";
import Poster from "../../../models/Poster";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const poster = await Poster.find({});

        res.status(200).json({ success: true, data: poster });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        if (req.query.user === process.env.USER_SUB) {
          const posters = await Poster.create(req.body);
          res.status(201).json({ success: true, data: posters });
        } else {
          res.send("Unauthorized request");
        }
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
