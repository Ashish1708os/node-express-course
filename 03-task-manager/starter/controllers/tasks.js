const getAllTasks = (req, res) => {
  res.send("all items");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTAsk = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = { getAllTasks, createTask, getTask, updateTAsk, deleteTask };
