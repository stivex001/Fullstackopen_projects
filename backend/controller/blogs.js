import Blog from "../model/blog.js";

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

export const addBlog = async (req, res) => {
  const body = req.body;

  try {
    const blog = await new Blog(body).save;

    res.status(201).json({ message: "blog created successfully", blog });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
