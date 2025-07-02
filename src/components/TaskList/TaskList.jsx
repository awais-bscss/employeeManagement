import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="list"
      className="w-full h-65 rounded-2xl flex items-center justify-start gap-4 flex-nowrap overflow-x-auto text-[#fff]"
    >
      {data.tasks.map((e, i) => (
        <React.Fragment key={i}>
          {e.active && <AcceptTask data={e} />}
          {e.newTask && <NewTask data={e} />}
          {e.completed && <CompleteTask data={e} />}
          {e.failed && <FailedTask data={e} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TaskList;
