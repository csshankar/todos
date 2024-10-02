import { useState } from "react"

export function CreateTodo(props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return <div className="h-screen flex justify-center flex-col">
        <div className='flex justify-center'>
            <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div>
                    <div className="px-10">
                        <div className="font-sans text-3xl font-bold text-black pb-5">
                            Todo App
                        </div>
                    </div>
                   
                        <label className="block mb-2 text-sm text-black font-semibold pt-4">Title</label>
                        <input type='text' placeholder='Make an appointment' className="flex justify-around p-1" onChange={function (e) {
                            const value = e.target.value;
                            setTitle(e.target.value);
                        }}></input><br></br>
                   
                    
                    <label className="block mb-2 text-sm text-black font-semibold ">Description</label>
                        <input type='text' placeholder='Description' className="flex justify-around p-1 ps-2" onChange={function (e) {
                            const value = e.target.value;
                            setDescription(e.target.value);
                        }}></input><br></br>
                  
                    <button className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" onClick={() => fetch("http://localhost:3000/todo",
                        {
                            method: "POST",
                            body: JSON.stringify({
                                title: title,
                                description: description
                            }),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                        .then(async function (res) {
                            const json = await res.json();
                            alert("todo added");
                        })
                    }> Add Todo </button>
                </div>
            </a>
        </div>

    </div>
}
