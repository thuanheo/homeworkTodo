app.models.TodoList = function() {
    this.todos = [];
    // delete
    //add
    // filter
    // clear Completed
    // toggleAllTodo
}
app.models.TodoList.prototype.deleteTodo = function(id) {
    var indexDeleteTodo = '';
    this.todos.find(function(todo, index) {
        indexDeleteTodo = index;
        return todo.id == id
    })
    this.todos.splice(indexDeleteTodo, 1)
}

app.models.TodoList.prototype.addTodo = function(todo) {
    this.todos.push(todo);
}

app.models.TodoList.prototype.filter = function() {
    return this.todos.filter( function(any) {
        return any.id == id;
    })
}

app.models.TodoList.prototype.editTodo = function(id, text) {
    var lengthTodos = this.todos.length;
    for (var i = 0; i < lengthTodos; i++) {
      if(id == this.todos[i].id){
        this.todos[i].editTodo(text);
        
      }      
    }
}
app.models.TodoList.prototype.check = function(id, isCompleted) {
    var lengthTodos = this.todos.length;
    for (var i = 0; i < lengthTodos; i++) {
      if(id == this.todos[i].id){
        this.todos[i].checkTodo(isCompleted);        
      }      
    }
}
app.models.TodoList.prototype.checkAll = function(isCompleted) {
    var lengthTodos = this.todos.length;
    for (var i = 0; i < lengthTodos; i++) {
        this.todos[i].checkTodo(isCompleted);             
    }
}
app.models.TodoList.prototype.clearCompleted = function() {
    var lengthTodos = this.todos.length,
        indexDeleteTodo = '',
        t = 0;
    for (var i = 0; i < lengthTodos; i++) {
        if(this.todos[i].isCompleted === true) t = t +1;           
    }
    while(t) {
        this.todos.find(function(todo, index) {
            indexDeleteTodo = index;
            return todo.isCompleted === true;
        })
        this.todos.splice(indexDeleteTodo, 1);
        t--;

    }

    console.log(t)
}
