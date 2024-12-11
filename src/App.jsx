import { useState, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import "./App.css";
import ListTask from "./components/ListTask";
import AddTask from "./components/AddTask";
function App() {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const updateStatus = (index, newStatus) => {
    // Step 1: Get tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Step 2: Update the status of the task at the specified index
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, status: newStatus } : task
    );

    // Step 3: Save updated tasks back to localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    // Step 4: Update the state with the new tasks
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    // Step 1: Retrieve tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Step 2: Remove the task by filtering it out
    const updatedTasks = tasks.filter((_, i) => i !== index);
    // Step 3: Save the updated array back to localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    // Step 4: Update the state with the new tasks
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <div
        className={`loader-container ${
          loading ? "opacity-1" : "opacity-0 hidden"
        }`}
      >
        <ScaleLoader color={"#FFFFFF"} loading={loading} size={30} />
      </div>
      <div className={`content ${loading ? "hidden" : "visible"}`}>
        <div className="bg-transaparent border-[1px] border-[#27272a] rounded-md shadow-xl w-full min-h-[90vh] md:p-6">
          <div className="w-full flex justify-between mb-5 mt-2 px-5 pt-3">
            <h1 className="text-2xl font-bold text-white">Task Management</h1>
            <AddTask tasks={tasks} setTasks={setTasks} />
          </div>
          <div className="flex flex-col justify-start gap-5 p-4">
            {tasks && tasks.length > 0 ? (
              tasks.map((task, index) => (
                <ListTask
                  key={index}
                  task={task}
                  updateStatus={updateStatus}
                  deleteTask={deleteTask}
                  index={index}
                />
              ))
            ) : (
              <h1 className="text-2xl font-bold text-white">No Task Found!</h1>
            )}
          </div>
        </div>
        <div className="mt-5">
          <p className="text-sm text-white">
            Made with ❤️ by{" "}
            <a
              href="https://github.com/RenaldyNaufalTA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Renaldy Naufal
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
