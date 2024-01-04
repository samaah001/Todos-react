export function Todos(todos) {
    console.log(todos);
    return <div>
        {todos.todos.map(function (todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed?"Completed":"Mark as done"}</button>
            </div>
        })}
    </div>
}