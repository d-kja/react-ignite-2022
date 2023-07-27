import { TaskProvider } from "../context/TaskContext"

import { CreateTaskInput } from "../components/CreateTaskInput"
import { TaskList } from "../components/TaskList"

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1500))

  return (
    <main>
      <TaskProvider>
        <CreateTaskInput />
        <TaskList />
      </TaskProvider>
    </main>
  )
}
