import Todo from "../model/todo.model.js";

// ================ Get all todos ==============
export const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

// ================ Create new todo =============
export const createTodo = async (req, res) => {
  const { title, description } = req.body;
  const newTodo = new Todo({
    title,
    description,
  });
  await newTodo.save();
  res.status(201).json(newTodo);
};

// ============ Update a todo ===============
export const updateTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(404).json({ message: "Todo not found" });
    return;
  }
  todo.title = req.body.title || todo.title;
  todo.description = req.body.description || todo.description;
  todo.completed =
    req.body.completed !== undefined ? req.body.completed : todo.completed;
  await todo.save();
  res.json(todo);
};

// ============= Delete a todo ===============
export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      res.status(404).json({ message: "Todo not found" });
      return;
    }

    res.json({ message: "Todo removed" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ============== Toggle =================
export const toggleTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    todo.completed = !todo.completed;
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ============== MarkAllComplete ================
export const markAllCompleted = async (req, res) => {
  try {
    const updatedTodos = await Todo.updateMany(
      { completed: false },
      { $set: { completed: true } }
    );

    res.json({
      message: `${updatedTodos.nModified} todos marked as completed`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ============= Markincompleted =====================
export const markAllIncompleted = async (req, res) => {
  try {
    const updatedTodos = await Todo.updateMany(
      { completed: true },
      { $set: { completed: false } }
    );

    res.json({
      message: `${updatedTodos.nModified} todos marked as incompleted`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
