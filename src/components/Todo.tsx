
import { Task } from '../types'

interface TodoProps {
    todo: Task;
    editTodo: (id: number | string, updatedTodo: Task) => void;
    deleteTodo: (id: number | string) => void;
    toggleStatus: (id: number | string) => void;
}
export function Todo({ todo, editTodo, deleteTodo, toggleStatus }: TodoProps) {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <input 
                    className="form-check-input" 
                    type="checkbox" 
                    value=""
                    onChange={() => toggleStatus(todo.id)} // Добавляем обработчик события
                    checked={todo.status === 'completed'} // Устанавливаем состояние чекбокса на основе статуса задачи
                />
                <p style={{ margin: '0 10px' }}>{todo.title}</p>
                <button type="button" className="btn btn-secondary" onClick={() => editTodo(todo.id, {...todo, title: 'Updated Title'})}>Edit</button>
                <button type="button" className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
        </div>
    )
}
