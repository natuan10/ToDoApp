import React from 'react';
import ToDo from './ToDo';

export default function ToDoList({ toDoList, onCheckButtonClick }) {
    return (
        <>
            {toDoList.map((todo) => (
                <ToDo key={todo.id} todo={todo} onCheckButtonClick={onCheckButtonClick} />
            ))
            }
        </>
    );
}