import {TodoList} from "../interface";

import TodoItem from "../components/todoItem"

function todoList(todoList: TodoList){
    return (
        <div className="todoListContainer">
            <div className="todosText">Todos</div>
            {todoList.todos
                //.sort((a, b) => b.created_at.localeCompare(a.created_at))
                .map((todo, i) => (
                    <TodoItem
                        todo={todo}
                        key={i}
                        deleteTodoItem={todoList.deleteTodoItem}
                        editTodoItem={todoList.editTodoItem}
                    />
                ))}
        </div>
    );
}

export default todoList;