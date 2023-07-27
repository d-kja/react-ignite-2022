"use client"

import { ClipboardText } from "phosphor-react"

import { TaskDashboard } from "./TaskDashboard"
import { Task } from "../Task"

import { useTaskContext } from "../../context/TaskContext"
import clsx from "clsx"

export const TaskList = () => {
  const { tasks = [] } = useTaskContext()

  return (
    <section className="mt-16 max-w-[46rem] md:mx-auto mx-2">
      <TaskDashboard />
      <main
        className={clsx("border-gray-400 mt-6", {
          "border-t": tasks.length === 0,
        })}
      >
        {tasks.length ? (
          <div className="flex flex-col gap-3">
            {tasks.map((task) => (
              <Task key={task.id} task={task}>
                {task.data}
              </Task>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 text-gray-300 px-6 py-16">
            <ClipboardText size={56} className="opacity-40" />
            <div className="flex flex-col text-center">
              <strong className="font-bold text-base">
                {"You don't have any tasks available"}
              </strong>
              <span className="font-normal text-base">
                Create a new task and organize your items
              </span>
            </div>
          </div>
        )}
      </main>
    </section>
  )
}
