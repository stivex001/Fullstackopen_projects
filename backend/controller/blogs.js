import Blog from "../model/blog";

export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.find();

    if (blog) {
      res.status(200).json({ message: "success", blog });
    } else {
      res.status(404).json({ error: "blog not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
