
export function CreateTodo({onChange}){
    return <div>
        <input type="text" name="" id="title" placeholder="Title" />
        <br /><br />
        <input type="text" name="" id="description" placeholder="Description" />
        <br /><br />

        <button onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:document.getElementById("title").value,
                    description:document.getElementById("description").value
                }),
                headers:{
                    "Content-type":"application/json"
                }
            }).then(res=>{
                onChange();
            })
        }}>Add a todo</button>
    </div>
}