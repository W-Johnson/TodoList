import React from "react";

interface addTodo {
    add: () => Promise<void>
}

function addText(addTodo: addTodo) {
       // console.log("In addTodo text enter = " +text.accessKey  + "#")
        addTodo.add();

}

function AddTodo(addTodo: addTodo) {
    console.log("In addTodo")

    return (
        <>
            <div className="addTodoContainer">
                <input
                    className="todoInputButton"
                    type="button"
                    value="+"
                    onClick={() => {
                        console.log("Button press");
                        addText(addTodo);
                    }
                    }
                />
            </div>
        </>
    );
}

export default AddTodo;