app.views.TodoView = function() {
  this.handleEvent('editTodo');
  this.handleEvent('deleteTodo');
  this.handleEvent('checkText');
}

app.views.TodoView.prototype.getText = function(self) {
}
app.views.TodoView.prototype.getTodo = function (self) {
  var id = self.attr('data-id'); // attribute
  return id;
}
app.views.TodoView.prototype.editTodo = function(id, text) {
  var todo = getTodo(id)
  todo.editTodo(text);
}

app.views.TodoView.prototype.renderTodo = function() {
    
}
app.views.TodoView.prototype.handleEvent = function(event, handler) {
  var self = this;
  switch (event) {
    case 'editTodo':
      $('body').on('dblclick', '.text-todo', function() {
          $(this).prev().show()
          $(this).hide()
      })
      $('body').on('focusout', '.todo-editing', function() {
          app.todoList.editTodo(self.getTodo($(this).parent()), $(this).val()); //edit array todo
          console.log(app.todoList.todos);
          $(this).next().html($(this).val())
          $(this).hide()
          $(this).next().show()
      })
    break;
    case 'deleteTodo':
        $('body').on('mouseover', 'li', function () {
            $(this).children('button').show();
        })
        $('body').on('mouseout', 'li', function () {
            $(this).children('button').hide();
        })
        $('body').on('click', '.delete-todo', function() {
            app.todoList.deleteTodo(self.getTodo($(this).parent()));
            $(this).parent().remove();
            $('.number-todo strong').html(app.todoList.todos.length)
            if(app.todoList.todos.length === 0) $('.menu-todo').hide();
            console.log(app.todoList.todos.length)
        })
    break;
    case 'checkText':
        $('body').on('click', '.check-todo', function (event) {
            if($(this).is(':checked')){
                $(this).next().next().css('text-decoration', 'line-through');
                app.todoList.check(self.getTodo($(this).parent()),true);
            } 
            if($(this).is(':not(:checked)')) {
                $(this).next().next().css('text-decoration', 'none');
                app.todoList.check(self.getTodo($(this).parent()),false);
            }  
            console.log('todoList ', app.todoList.todos);    
            if($('.check-todo').is(':checked')) $('.clear').show();
            else $('.clear').hide(); 
        })
    break;
  }
}
  