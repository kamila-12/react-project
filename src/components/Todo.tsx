
interface TodoProps {
    date: string; // тип даты можно изменить в соответствии с вашими требованиями
}
export function Todo({date}: TodoProps) {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            
            <input className="form-check-input" type="checkbox" value=""></input>
            <p style={{ margin: '0 10px' }}>Create project</p>
            <button type="button" className="btn btn-secondary">Edit</button>
            <button type="button" className="btn btn-danger">Delete</button>
            </div>
            <p style={{ fontSize: 'smaller', marginLeft: '30px', textAlign: 'left' }}>{date}</p>
        </div>
    )
 }
 