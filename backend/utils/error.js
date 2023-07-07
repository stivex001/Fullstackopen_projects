/* eslint-disable no-undef */
exports.errorHandler = (err, req, res, next) => {
  console.log(err.message);

  if ((err, name === "CastError")) {
    return res.status(400).json({ error: "malformatted id" });
  }

  next(err);
};
