const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "Ashish") {
    req.user = { name: "ashish", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
