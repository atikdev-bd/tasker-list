/* eslint-disable no-unused-vars */
import { useState } from "react";
import AddTaskModal from "./addTaskModal";
import SearchTask from "./searchTask";
import TaskAction from "./taskAction";
import TaskList from "./taskList";

export default function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "I want to Learn React such than, I can treat it like my slave and make it do whatever I want to do.",
    tags: ["web", "react", "js"],
    priority: "High",
    isFavorite: false,
  };

  const [tasks, setTasks] = useState([defaultTask]);

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {showModal && <AddTaskModal />}
      <section className="mb-20" id="tasks">
        <div className="container">
          {/*<!-- Search Box --> */}
          <div className="p-2 flex justify-end">
            <SearchTask />
          </div>
          {/*<!-- Search Box Ends -->*/}

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction onTaskAdd={() => setShowModal(true)} />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </section>
    </div>
  );
}
