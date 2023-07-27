import { formatDistanceToNow } from 'date-fns'
import { useCyclesContext } from '../../context/CyclesContext'
import { HistoryContainer, HistoryList, Status } from './styles'

export const History = () => {
  const { cycles } = useCyclesContext()

  return (
    <HistoryContainer>
      <h1>History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutes</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startTime), {
                    addSuffix: true,
                  })}
                </td>
                <td>
                  {cycle.finishedDate && (
                    <Status statusColor="green">Completed</Status>
                  )}

                  {cycle.interruptedDate && (
                    <Status statusColor="red">Interrupted</Status>
                  )}

                  {!cycle.interruptedDate && !cycle.finishedDate && (
                    <Status statusColor="yellow">In progress</Status>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
