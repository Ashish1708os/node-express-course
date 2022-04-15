const notFound = (req, res) => {
  // res.status(404).send("route Does Not Exists");
  res.status(404).json({ destination: "not found" });
};

module.exports = notFound;
