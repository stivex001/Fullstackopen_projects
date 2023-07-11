/* eslint-disable no-undef */
const Blog = require("../model/blog");

exports.getBlog = async (req, res) => {
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

exports.addBlog = async (req, res) => {
  const { title, author, url, likes } = req.body;
  try {
    const blog = await new Blog({ title, author, url, likes }).save;

    res.status(201).json({ message: "blog created successfully", blog });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteBlog = async (req, res) => {
  const id = req.params.id;

  try {
    const blog = await Blog.findByIdAndRemove(id);

    if (blog) {
      return res
        .status(200)
        .json({ message: `blog with id ${id} deleted successfully` });
    } else {
      return res.status(404).json({ message: "blog not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateBlog = async (req, res) => {
  const id = req.params.id;
  const { title, author, url } = req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, author, url },
      { new: true }
    );

    if (updatedBlog) {
      return res
        .status(200)
        .json({ message: "blog updated succesffully", updatedBlog });
    } else {
      return res.status(404).json({ message: "blog not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
