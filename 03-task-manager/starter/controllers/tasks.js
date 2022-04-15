const Task = require("../models/tasks");
// const asyncWrapper = require("../middleware/async");
// const { createCustomError } = require("../error/custom-error");

// const getAllTasks = asyncWrapper(async (req, res) => {
//   const tasks = await Task.find({});
//   res.status(200).json({ tasks }); // diffrent ways to send the response
//   // res.status(200).json({ tasks, total: tasks.length });
//   // res
//   //   .status(200)
//   //   .json({ success: true, data: { tasks, total: tasks.length } });
// });

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks }); // diffrent ways to send the response
    // res.status(200).json({ tasks, total: tasks.length });
    // res
    //   .status(200)
    //   .json({ success: true, data: { tasks, total: tasks.length } });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

// const createTask = asyncWrapper(async (req, res) => {
//   const task = await Task.create(req.body);
//   res.status(201).json({ task });
// });

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

// const getTask = asyncWrapper(async (req, res, next) => {
//   const { id: taskID } = req.params; // { id: taskId } this syntax means we are getting id from req.params by destructuring and assigning new name to that id i.e it is similar to
//   // const taskID = req.params.id;
//   const task = await Task.findOne({ _id: taskID });
//   // const task = await Task.findById(taskID); // works same as above
//   if (!task) {
//     return next(createCustomError(`No task with id : ${taskID}`, 404));
//   }
//   res.status(200).json({ task });
// });

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params; // { id: taskId } this syntax means we are getting id from req.params by destructuring and assigning new name to that id i.e it is similar to
    // const taskID = req.params.id;
    const task = await Task.findOne({ _id: taskID });
    // const task = await Task.findById(taskID); // works same as above
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

// const updateTask = asyncWrapper(async (req, res) => {
//   const { id: taskID } = req.params;

//   const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//     // this is the option object
//     new: true,
//     runValidators: true,
//   });
//   if (!task) {
//     return next(createCustomError(`No task with id : ${taskID}`, 404));
//   }
//   res.status(200).json({ task });
// });

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      // this is the option object
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
// if we update the task without validaters we can update them without any constrains like passing empty string to name which is not good

// const deleteTask = asyncWrapper(async (req, res) => {
//   const { id: taskID } = req.params;
//   const task = await Task.findOneAndDelete({ _id: taskID });
//   // const task = await Task.findByIdAndDelete(taskID); // id also workds
//   if (!task) {
//     // return res.status(404).json({ msg: `No task with id : ${taskID}` });
//     return next(createCustomError(`No task with id : ${taskID}`, 404));
//   }
//   res.status(200).json({ task });
//   // res.status(200).send(); // we can also send this type of responce
//   // res.status(200).json({ task: null, status: "success" });
// });

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    // const task = await Task.findByIdAndDelete(taskID); // id also workds
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    res.status(200).json({ task });
    // res.status(200).send(); // we can also send this type of responce
    // res.status(200).json({ task: null, status: "success" });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
