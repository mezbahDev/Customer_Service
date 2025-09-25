import React from "react";

const Task = ({ tasks, resolvedTasks, onComplete }) => {
  return (
    <div className="w-full lg:max-w-[358px] flex flex-col gap-[2rem] lg:gap-[4rem]">
      {/* Mobile & Tablet: Task and Resolved side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
        {/* Task Status */}
        <div>
          <p className="text-[20px] md:text-[24px] font-[600] text-[#34485A] mb-4">
            Task Status
          </p>
          {tasks && tasks.length > 0 ? (
            <div className="flex flex-col gap-[16px] rounded-[4px]">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-[#fff] flex flex-col p-[16px] gap-[16px] rounded-[4px] shadow-sm"
                >
                  <h2 className="text-[16px] md:text-[18px] font-[500] text-black">
                    {task.title}
                  </h2>
                  <button
                    onClick={() => onComplete(task.id)}
                    className="rounded-[4px] w-full bg-[rgba(2,165,59,1)] py-[12px] text-white font-[500] hover:bg-green-700 transition-colors duration-200"
                  >
                    Complete
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#627382] text-center mt-[20px] md:mt-[50px] text-[14px] md:text-[16px]">
              Select a ticket to add to Task Status
            </p>
          )}
        </div>

        {/* Resolved Tasks */}
        <div>
          <p className="text-[20px] md:text-[24px] font-[600] text-[#34485A] mb-4">
            Resolved Task
          </p>
          {resolvedTasks && resolvedTasks.length > 0 ? (
            <div className="flex flex-col gap-4">
              {resolvedTasks.map((rTask) => (
                <div
                  key={rTask.id}
                  className="bg-white text-[16px] md:text-[18px] p-4 rounded-md shadow text-black border-l-4 border-green-500"
                >
                  {rTask.title}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#627382] text-center mt-4 text-[14px] md:text-[16px]">
              No resolved tasks yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;