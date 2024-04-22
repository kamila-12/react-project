import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import {Todo} from './Todo.tsx'
import {Task} from '../types'
import { addTodo, editTodo, deleteTodo, toggleStatus } from '../store/todoSlice';

// Добавляем useSelector для получения списка задач
export function List() {
    const todos = useSelector((state: RootState) => state.todos.todos);
    const dispatch = useDispatch();
    const [filter, setFilter] = useState<string>('all')


    const addTodoHandler = () => {
        dispatch(addTodo({
            id: Date.now(),
            title: 'Create react app',
            date: new Date().toLocaleDateString(),
            status: 'opened'
        }));
    };
    const editTodoHandler = (id: number | string, updatedTodo: Task) => {
        dispatch(editTodo({ id, updatedTodo }));
    };

    const deleteTodoHandler = (id: number | string) => {
        dispatch(deleteTodo(id));
    };
    const toggleStatusHandler = (id: number | string) => {
        dispatch(toggleStatus(id));
    };

    const selectStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(event.target.value); // Обновляем выбранное значение фильтра
    };

    const filteredTodos = filter === 'all' ? todos : todos.filter(todo => todo.status === filter); // Фильтрация списка по статусу задач
    return (
        <>
        <p>Todo list</p>
        <div style={{display: 'flex'}}>
         <button type="button" className="btn btn-secondary" onClick={addTodoHandler}>Add</button>
         <select className="form-select" defaultValue='all' onChange={selectStatus}>
                     <option value="all">All</option>
                     <option value="opened">Opened</option>
                     <option value="completed">Completed</option>
         </select>
        </div>
        
        {filteredTodos.map(todo => (
                 <Todo
                     key={todo.id}
                     todo={todo}
                     editTodo={editTodoHandler}
                     deleteTodo={deleteTodoHandler}
                     toggleStatus={toggleStatusHandler}
                 />
             ))}
         </>
    )
 }
 

// export function List() {

//     const [todos, setTodos] = useState<Task[]>([{
//         id: 1, 
//         title: 'Create react app', 
//         date: '01.04', 
//         status: 'opened'
//         }]);
    
    // const [filter, setFilter] = useState<string>('all')
    // const addTodo = () => {
    //         setTodos([ ...todos, {id: Date.now(), 
    //                               title: '', 
    //                               date: new Date().toLocaleDateString(), 
    //                               status: 'opened'}])
    //      }
         

    // const editTodo = (id: number | string, updatedTodo: Task) => {
    //         setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
    //     }
    
    // const deleteTodo = (id: number | string) => {
    //         setTodos(todos.filter(todo => todo.id !== id));
    //     }
    // const toggleStatus = (id: number | string) => {
    //         setTodos(todos.map(todo => {
    //             if (todo.id === id) {
    //                 return {
    //                     ...todo,
    //                     status: todo.status === 'opened' ? 'completed' : 'opened'
    //                 };
    //             }
    //             return todo;
    //         }));
    //     };

    

    // Использование массивов
    // const todos = [{ id: 1, title: 'Create react app', date: '01.04' }];

    // const addTodo = () => {
    //     todos.push({ id: 2, title: 'Run react app', date: '01.04' });
    //     console.log('addTodo', todos)
    // };
   