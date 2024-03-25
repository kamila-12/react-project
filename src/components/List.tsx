import {Todo} from './Todo.tsx'


export function List() {
   return (
       <>
       <p>Todo list</p>
       <div style={{display: 'flex'}}>
        <button type="button" className="btn btn-secondary">Add</button>
        <select className="form-select" aria-label="Default select example">
            <option selected>all</option>
            <option value="opened">opened</option>
            <option value="completed">completed</option>
            
            
        </select>

       </div>
       
           <Todo />
           <Todo />
           <Todo />
       </>
   )
}
