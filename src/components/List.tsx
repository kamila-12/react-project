import {Todo} from './Todo.tsx'


export function List() {
    const todos = [{ id: 1, title: 'Create react app', date: '01.04' }];

    const addTodo = () => {
        todos.push({ id: 2, title: 'Run react app', date: '01.04' });
    };
   return (
       <>
       <p>Todo list</p>
       <div style={{display: 'flex'}}>
        <button type="button" className="btn btn-secondary" onClick={addTodo}>Add</button>
        <select className="form-select" aria-label="Default select example">
            <option selected>all</option>
            <option value="opened">opened</option>
            <option value="completed">completed</option>
            
            
        </select>

       </div>
       
       {todos.map(todo => (
                <Todo key={todo.id} id={todo.id} title={todo.title} date={todo.date} />
            ))}
           
       </>
   )
}
