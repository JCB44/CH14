const router = require("express").Router();
const { Post } = require("../../models");
const authorize = require("../../utils/authorize");

router.post("/", authorize, async (req, res) => {
  const body = req.body; 
  try {
     const post = await Post.create({
       ...body,
       userID: req.session.userID
     });
     res.status(200).json(post);
   } catch (err) {
     res.status(400).json(err);
   }
});

router.get('/:id', async (req, res) => {

  try {
     const postData = await Post.findOne({
       where: {
         id: req.params.id,
       },
     });
     res.json(postData);
} catch (err) {
  res.status(500).json(err);
}
});

router.put("/:id", authorize, (req, res) => {
  try { const updated = Post.update({
        ...req.body,
        // userID: req.session.userID
     }, 
     {
        where: {
     id: req.params.id},
  });
   res.status(200).json(updated);
} catch (err) {
  res.status(500).json(err);
}
});

router.delete("/:id", authorize, async (req, res) => {
  try {
    const perams = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!perams) {
      res.status(404).json({
        message: `deleted`,
      });
      return;
    }
    res.status(200).json(perams);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;