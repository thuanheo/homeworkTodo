app.views.TodoListView = function() {
    //this.todoList = new TodoList();
    this.ENTER = 13;
    this.handleEvent('addTodo');   
    this.handleEvent('completed');
    this.handleEvent('all');
    this.handleEvent('active');
    this.handleEvent('clear');
    this.handleEvent('checkAll');
}
app.views.TodoListView.prototype.getTodo = function (self) {
    var id = self.attr('data-id'); // attribute
    return id;
}
app.views.TodoListView.prototype.deleteTodo = function(id) {
    var todoList = getTodoList()
    todoList.deleteTodo(id);
}

app.views.TodoListView.prototype.handleEvent = function(event, handle) {
    // var todoList = new TodoList();
    var self = this;
    switch (event) {
        case 'addTodo':
            $('body').on('keypress', '.todo-input', function(e) {
                if(e.keyCode === self.ENTER) { // 13 => enter
                    var todo = new app.models.Todo($('.todo-input').val());
                    app.todoList.addTodo(todo);
                    console.log('todoList ', app.todoList.todos);
                    $('.todo-list').append('<li data-id = "'+ todo.id +'" class="todo">'+ 
                                           '<input class= "check-todo" type="checkbox" />' +
                                           '<input class="todo-editing" value="'+ todo.text +'"/>' +
                                           '<lable class= "text-todo" >' + todo.text + '</lable>' +
                                           '<button class= "delete-todo" >' + 'x' + '</button>' +
                                           '<hr/>' +
                                           '</li>');
                    $('.todo-input').val('');
                    $('.number-todo strong').html(app.todoList.todos.length)
                    $('.menu-todo').show();
                }
            })
        break;
        case 'checkAll':
            $('body').on('click', '.check-all', function (event) {
                if($(this).is(':checked')) {
                    $('.check-todo').prop('checked', true)
                    $('.check-todo').parent().css('text-decoration', 'line-through');
                    app.todoList.checkAll(true);
                }
                if($(this).is(':not(:checked)')) {
                    $('.check-todo').prop('checked', false)
                    $('.check-todo').parent().css('text-decoration', 'none');
                    app.todoList.checkAll(false);
                }
                console.log('todoList ', app.todoList.todos); 
                if($('.check-todo').is(':checked')) $('.clear').show();
                else $('.clear').hide();    
            })
        break;
        case 'all':
            $('body').on('click', '.all', function (event) {
                $('.check-todo').parent().show(); 
            })
        break;
        case 'completed':
            $('body').on('click', '.completed', function (event) {
                $('.check-todo:not(:checked)').parent().hide(); 
                $('.check-todo:checked').parent().show();
            })
        break;
        case 'active':
            $('body').on('click', '.active', function (event) {
                $('.check-todo:checked').parent().hide(); 
                $('.check-todo:not(:checked)').parent().show();
            })
        break;
        case 'clear':
            $('body').on('click', '.clear', function (event) {
                $('.check-todo:checked').parent().remove();
                app.todoList.clearCompleted();
                $('.number-todo strong').html(app.todoList.todos.length)
                if(app.todoList.todos.length === 0) $('.menu-todo').hide();
                console.log('todoList ', app.todoList.todos);
            })
        break;
        default:

        break;
    }
}