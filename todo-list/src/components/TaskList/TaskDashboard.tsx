"use client"

import { useTaskContext } from "../../context/TaskContext"

export const TaskDashboard = () => {
  const { tasks = [] } = useTaskContext()

  const totalTasks = String(tasks?.length)
  const totalCompletedTasks = tasks.reduce((acc, current) => {
    const isCompleted = current.isCompleted

    if (isCompleted) return acc + 1
    return acc
  }, 0)

  return (
    <div className="flex justify-between">
      <div className="flex gap-2 items-center">
        <strong className="font-bold text-sm text-blue-default">
          Created tasks
        </strong>
        <span className="bg-gray-400 px-2 py-[0.125rem] rounded-full text-xs font-bold">
          {totalTasks}
        </span>
      </div>

      <div className="flex gap-2 items-center">
        <strong className="font-bold text-sm text-purple-default">
          Finished
        </strong>
        <span className="bg-gray-400 px-2 py-[0.125rem] rounded-full text-xs font-bold">
          {totalCompletedTasks}
        </span>
      </div>
    </div>
  )
}
