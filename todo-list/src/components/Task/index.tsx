"use client"

import { ReactNode } from "react"

import { Check } from "phosphor-react"

import { DeleteBtn } from "./DeleteBtn"
import { Checkbox } from "../primitives/Checkbox"

import { Task as TTask, useTaskContext } from "../../context/TaskContext"

interface TaskProps {
  children: ReactNode
  task: TTask
}

export const Task = ({ task, children }: TaskProps) => {
  const { removeTask, toggleTask } = useTaskContext()

  const handleDeleteTask = () => removeTask(task.id)
  const handleToggleTask = () => {
    toggleTask(task.id)
  }

  return (
    <>
      <div className="p-4 bg-gray-500 border border-gray-400 rounded-lg flex gap-3 max-w-[736px]">
        <Checkbox
          indicator={
            <Check size={10} weight="bold" className="mx-auto mt-[1px]" />
          }
          onToggleTask={handleToggleTask}
          isCompleted={task?.isCompleted ?? false}
          htmlFor={task.id}
        >
          {children}
        </Checkbox>
        <DeleteBtn onClick={handleDeleteTask} />
      </div>
    </>
  )
}
