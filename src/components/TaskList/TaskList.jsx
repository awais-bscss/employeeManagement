import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({ tasks, employeeId }) => {
  return (
    <div
      id="list"
      className="w-full min-h-[260px] rounded-2xl flex items-start justify-start gap-4 flex-nowrap overflow-x-auto text-[#fff] py-4"
    >
      {tasks.length > 0 ? (
        tasks.map((e, i) => (
          <React.Fragment key={i}>
            {e.active && <AcceptTask data={e} employeeId={employeeId} />}
            {e.newTask && <NewTask data={e} employeeId={employeeId} />}
            {e.completed && <CompleteTask data={e} />}
            {e.failed && <FailedTask data={e} />}
          </React.Fragment>
        ))
      ) : (
        <p className="text-sm sm:text-base text-gray-300 mx-auto">
          No tasks available.
        </p>
      )}
    </div>
  );
};

export default TaskList;
