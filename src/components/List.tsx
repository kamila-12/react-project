import {useState} from "react";
import {Todo} from './Todo.tsx'
import {Task} from '../types'



export function List() {

    const [todos, setTodos] = useState<Task[]>([{
        id: 1, 
        title: 'Create react app', 
        date: '01.04', 
        status: 'opened'
        }]);
    
    const [filter, setFilter] = useState<string>('all')
    const addTodo = () => {
            setTodos([ ...todos, {id: Date.now(), 
                                  title: '', 
                                  date: new Date().toLocaleDateString(), 
                                  status: 'opened'}])
         }
         

    const editTodo = (id: number | string, updatedTodo: Task) => {
            setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
        }
    
    const deleteTodo = (id: number | string) => {
            setTodos(todos.filter(todo => todo.id !== id));
        }
    const toggleStatus = (id: number | string) => {
            setTodos(todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        status: todo.status === 'opened' ? 'completed' : 'opened'
                    };
                }
                return todo;
            }));
        };

    const selectStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setFilter(event.target.value); // Обновляем выбранное значение фильтра
        };
    
    const filteredTodos = filter === 'all' ? todos : todos.filter(todo => todo.status === filter); // Фильтрация списка по статусу задач


    // Использование массивов
    // const todos = [{ id: 1, title: 'Create react app', date: '01.04' }];

    // const addTodo = () => {
    //     todos.push({ id: 2, title: 'Run react app', date: '01.04' });
    //     console.log('addTodo', todos)
    // };
   return (
       <>
       <p>Todo list</p>
       <div style={{display: 'flex'}}>
        <button type="button" className="btn btn-secondary" onClick={addTodo}>Add</button>
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
                    editTodo={editTodo} 
                    deleteTodo={deleteTodo}
                    toggleStatus={toggleStatus}/>
                      
            ))}
           
       </>
   )
}
