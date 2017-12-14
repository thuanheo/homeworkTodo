app.models.Todo = function(text, id) {
    this.id = new Date().valueOf();
    this.text = text;
    this.isCompleted = false;
    // edit
}
app.models.Todo.prototype.editTodo = function(text) {
    this.text = text;
}
app.models.Todo.prototype.checkTodo = function(isCompleted) {
    this.isCompleted = isCompleted;
}
