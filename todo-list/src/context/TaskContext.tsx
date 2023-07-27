"use client"

import { createContext, ReactNode, useContext, useState } from "react"
import { v4 as uuid } from "uuid"

export type Task = {
  id: string
  data: string
  isCompleted?: boolean
}
interface TaskContextProps {
  tasks: Task[]
  toggleTask: (taskId: string) => void
  removeTask: (taskId: string) => void
  addTask: (task: Omit<Task, "id">) => void
}
interface TaskProviderProps {
  children: ReactNode
}

const TaskContext = createContext({} as TaskContextProps)

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([])

  const onAddTask = (task: Omit<Task, "id">) => {
    const formattedTask = {
      id: uuid(),
      ...task,
    }

    setTasks((prev) => [...prev, formattedTask])
  }
  const onRemoveTask = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId))
  }
  const onToggleTask = (taskId: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.isCompleted = !task.isCompleted
      }

      return task
    })
    console.log(updatedTasks)
    setTasks(updatedTasks)
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask: onAddTask,
        removeTask: onRemoveTask,
        toggleTask: onToggleTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export const useTaskContext = () => useContext(TaskContext)
