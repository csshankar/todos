export function Todos({todos}) {

    return <div>
        {todos.map(todo => {
        console.log(todo.id); 

        return (
          <div key={todo.id}> {/* Ensure todo.id is unique */}
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button className="bg-black text-white rounded-full" >
              {todo.completed ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        );
      })}

    </div>
}