/*
$(document) .ready( function() {
    var todo = $('.todo');
    var btn = $('.login-btn');
    var username = $('#username');
    var formList = $('.form-list');
    todo.on('click','.login-btn', function() {
        $(this).html('insal');   
    });
    todo.on('keyup','#username', function(e) {
        var usernameErr = $(this).val();
        if (e.keyCode == 13) {
            console.log('length', usernameErr);
            $('.show-tex').html(usernameErr);
            $('.form-list').show();
          }   
    });
})  */

var Todo = function(text, isCompleted) {
    this.id = new Date().valueOf();
    this.tetx = text;
    this.isCompleted = false;
    // edit
}
Todo.prototype.editTdo = function() {
    this.text = text;
}
var TodoList = function(todos) {
    this.todos = todos;
    // delete
    //add
    // filter
    // clear Completed
    // toggleAllTodo
}
TodoList.prototype.deleteTodo = function(id) {
    var indexDeleteTodo = '';
    this.todos.find(function(todo, index) {
        indexDeleteTodo = index
        return todo.id === id
    })
    this.todos.splice(indexDeleteTodo, 1)
}

TodoList.prototype.addTodo = function(todo) {
    this.todos.push(todo);
}

TodoList.prototype.filter =function() {
    return this.todos.filter( function(any) {
        return any.id === id;
    })
}