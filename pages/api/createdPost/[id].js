import dbConnect from '../../../utils/dbConnect';
import Poster from '../../../models/Poster';

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const posts = await Poster.findById(id);
        if (!posts) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: posts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        
        const postEdit = await Poster.findByIdAndUpdate(id, {
          
          $push: {
            performer: req.body.performer,
            date: req.body.date,
            comment: req.body.comment,
          },
        });
       
       
        if (!postEdit) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: postEdit });
      } catch (error) {
        res.status(400).json({ success: false });
        console.log(error);
      }
      break;
    case 'DELETE':
      try {
        const deletepost = await Poster.deleteOne({ _id: id });

        if (!deletepost) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
