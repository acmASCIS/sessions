import Post from "../models/Post";
const createPost = async (req: any, res: any) => {
  const { text } = req.body;
  const user = req.user;
  try {
    const post = await new Post({
      text: text,
      user: user,
    }).save();

    if (post) {
      res.status(200).json({
        post: post,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "error",
      error: err.message,
    });
  }
};

export default createPost;
