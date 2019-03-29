const Todo = require("./Todo");

module.exports = {
  getTodos(req, res) {
    console.log("getTodos: ");
    return Todo.find((err, todos) => {
      console.log("todos: ", todos);
      return res.status(200).json(todos);
    });
  },
  addTodo(req, res) {
    Todo.create(
      {
        title: "Shea's todo",
        description: "This is an example of a thing"
      },
      (err, todo) => {
        console.log("todo: ", todo);
      }
    );
  }
};
