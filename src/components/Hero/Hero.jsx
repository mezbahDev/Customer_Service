import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Task from "../Task/Task";
import Progress from "../Progress/Progress";

const Hero = () => {
  const [ticketsData, setTicketsData] = useState([]);
  const [selectedTask, setSelectedTask] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  useEffect(() => {
    const fetchTickets = async () => {
      const res = await fetch("/tickets.json");
      const data = await res.json();
      setTicketsData(data);
    };
    fetchTickets();
  }, []);

  const handleTicketClick = (ticket) => {
    if (!selectedTask.some((t) => t.id === ticket.id)) {
      setSelectedTask((prev) => [
        ...prev,
        { ...ticket, status: "In Progress" },
      ]);
      setInProgressCount((prev) => prev + 1);

      // Toast Notification
      toast.info(`${ticket.title} added to Task Status`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const handleCompleteTask = (taskId) => {
    const taskToComplete = selectedTask.find((t) => t.id === taskId);
    if (taskToComplete) {
      // add resolvedtask
      setResolvedTasks((prev) => [...prev, taskToComplete]);

      // remove selected task
      setSelectedTask((prev) => prev.filter((t) => t.id !== taskId));

      // decrease and increase
      setInProgressCount((prev) => (prev > 0 ? prev - 1 : 0));
      setResolvedCount((prev) => prev + 1);

      // remove from tickets data
      setTicketsData((prev) => prev.filter((ticket) => ticket.id !== taskId));

      // toast notificatoin
      toast.success(`${taskToComplete.title} marked as complete`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      {/* progress component */}
      <Progress inProgress={inProgressCount} resolved={resolvedCount} />

      <div className="p-[20px] md:p-[80px] bg-[#F5F5F5] font-inter">
        {/* Mobile & Tablet: Task Component at top */}
        <div className="lg:hidden mb-8">
          <Task
            tasks={selectedTask}
            resolvedTasks={resolvedTasks}
            onComplete={handleCompleteTask}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_358px] gap-[40px] lg:gap-[13px]">
          {/* Customer Tickets */}
          <div className="flex flex-col">
            <p className="text-[24px] font-[600] mb-[24px] text-black">
              Customer Tickets
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              {ticketsData.map((ticket) => {
                // Status color logic
                let statusBg = "";
                let statusText = "";
                let iconColor = "";

                if (ticket.status === "Open") {
                  statusBg = "bg-[#B9F8CF]";
                  statusText = "text-[#0B5E06]";
                  iconColor = "text-[#02A53B]";
                } else if (ticket.status === "In Progress") {
                  statusBg = "bg-[#F8F3B9]";
                  statusText = "text-[#B89500]";
                  iconColor = "text-[#B89500]";
                }

                // Priority color logic
                let priorityColor = "";
                if (ticket.priority === "High Priority")
                  priorityColor = "text-[#F83044]";
                else if (ticket.priority === "Medium Priority")
                  priorityColor = "text-[#FEBB0C]";
                else if (ticket.priority === "Low Priority")
                  priorityColor = "text-[#02A53B]";

                return (
                  <div
                    key={ticket.id}
                    onClick={() => handleTicketClick(ticket)}
                    className="w-full bg-[#fff] p-[16px] rounded-[4px] shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex justify-between items-center">
                      <p className="text-[#001931] text-[16px] md:text-[18px] font-[600]">
                        {ticket.title}
                      </p>
                      <div
                        className={`flex items-center justify-center gap-[6px] p-[4px] rounded-full ${statusBg}`}
                      >
                        <i
                          className={`ri-checkbox-blank-circle-fill scale-[1.1] ${iconColor}`}
                        ></i>
                        <p
                          className={`font-[500] px-2 py-1 rounded ${statusText} text-sm`}
                        >
                          {ticket.status}
                        </p>
                      </div>
                    </div>

                    <p className="my-[13px] text-[#627382] text-sm md:text-base">
                      {ticket.description}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-between gap-2">
                      <div className="flex gap-[16px]">
                        <p className="text-[#627382] text-sm">#{ticket.id}</p>
                        <p className={`${priorityColor} text-sm`}>
                          {ticket.priority}
                        </p>
                      </div>
                      <div className="flex justify-between gap-[16px]">
                        <p className="text-[#627382] text-sm">
                          {ticket.customer}
                        </p>
                        <div className="flex justify-between gap-[8px]">
                          <i className="ri-calendar-line text-[#627382]"></i>
                          <p className="text-[#627382] text-sm">
                            {ticket.createdAt}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Large Screen: Task Component on right */}
          <div className="hidden lg:block">
            <Task
              tasks={selectedTask}
              resolvedTasks={resolvedTasks}
              onComplete={handleCompleteTask}
            />
          </div>
        </div>
      </div>

      {/* toastContainer */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Hero;
