import * as React from "react";

import {TodoItem} from '../interface';

function todoItem(TodoItem: TodoItem) {
return(
    <div className="todoItem">
        <div className="todoItemText">{TodoItem.todo.todoText}</div>
        <div className="todoItemControls">
            <i className="todoItemControlEdit">
                <button className="bg-default" onClick={() => TodoItem.editTodoItem(TodoItem.todo)}>
                    Edit
                </button>
            </i>
            <i className="todoItemControlDelete">
                <button className="bg-danger" onClick={() => TodoItem.deleteTodoItem(TodoItem.todo)}>
                    Del
                </button>
            </i>
        </div>
    </div>
);
}

export default todoItem;