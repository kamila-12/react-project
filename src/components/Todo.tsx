export function Todo() {
    return (
        <div style={{display: 'flex'}}>
        
            <input className="form-check-input" type="checkbox" value=""></input>
            <p>Create</p>
            <button type="button" className="btn btn-secondary">Edit</button>
            <button type="button" className="btn btn-danger">Delete</button>
        </div>
    )
 }
 