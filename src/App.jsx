import React, { useRef, useState } from "react";

const App = () => {
  const inputValue = useRef()

  const [task,setTask] = useState([])

  function handleSubmit() {
    setTask([
      ...task, inputValue.current.value
    ])
    inputValue.current.value = ''
  }

  function handleDelete(indexDelete) {
    setTask(task.filter( (item,index) => index !== indexDelete ))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">To-Do App</h1>
        <div className="flex mb-4">
          <input
            type="text"
            ref={inputValue}
            className="flex-grow p-2 border rounded-l-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter a task"
          />
          <button className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600" onClick={handleSubmit}>
            Add
          </button>
        </div>
        <ul className="my-10">
          {task.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 mb-2 rounded-lg"
            >
              <span>{item}</span>
              <button
                className="bg-red-600 hover:bg-red-800 px-2 py-1 text-white rounded-lg"
                onClick={() =>handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
