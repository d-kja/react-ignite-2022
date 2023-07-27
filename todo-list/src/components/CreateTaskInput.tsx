"use client"

import { PlusCircle } from "phosphor-react"

import { Input } from "@/components/primitives/Input"
import { Button } from "@/components/primitives/Button"

import { useTaskContext } from "../context/TaskContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

interface Task {
  task: string
}

const taskSchema = z.object({
  task: z.string().min(3, "min length of 3 characters"),
})

export const CreateTaskInput = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Task>({
    resolver: zodResolver(taskSchema),
  })
  const { addTask } = useTaskContext()

  const handleSubmitTask: SubmitHandler<Task> = (data) => {
    const formattedTask = {
      data: data.task,
      isCompleted: false,
    }

    addTask(formattedTask)
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitTask)}
      className="flex justify-center items-center gap-2 -mt-[1.6875rem] md:mx-0 mx-2"
    >
      <Input
        className="md:w-[39.875rem] w-80"
        placeholder="Create a new task"
        error={errors.task?.message}
        {...register("task")}
      />
      <Button variant="fill" scheme="primary">
        Create <PlusCircle size={16} weight="bold" />
      </Button>
    </form>
  )
}
