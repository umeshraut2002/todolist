import { useState, useEffect} from 'react'
import './App.css'

function App() {

  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [task, SetTask] = useState([]);
  
  const handleTask = () =>{
    alert("Something is click")
  }

  const handleDelete = () => {
        
  }

  
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen p-4">
        <h1 className="mb-4 text-2xl uppercase">My To Do List</h1>

        <div className="w-full p-4 mb-6 border-2 md:w-1/3 rounded-2xl">
          <h2 className="mb-2 uppercase">Task 1: Sample Task Title</h2>

          <form className="flex flex-col gap-4">
            <label htmlFor="title" className="uppercase">Task Title</label>
            <input
              className="w-full p-3 border rounded-md"
              id="title"
              type="text"
              placeholder="Enter your task"
              onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="detail" className="uppercase">Task Detail</label>
            <input
              className="w-full p-3 border rounded-md"
              id="detail"
              type="text"
              placeholder="Enter your task details"
            />
          </form>

          <div className="flex justify-between mt-4">
            <button className="p-2 text-white bg-red-600 rounded-md">Delete</button>
            <button onClick={handleTask()} className="p-2 text-white bg-green-600 rounded-md">Add More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
