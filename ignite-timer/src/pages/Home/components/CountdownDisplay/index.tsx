import { useEffect } from 'react'

import { useCyclesContext } from '../../../../context/CyclesContext'
import { CountDownContainer, SeparatorContainer } from './styles'

import { differenceInSeconds } from 'date-fns'

export const CountdownDisplay = () => {
  const {
    activeCycle,
    activeCycleId,
    amountSecondsPassed,
    changeAmountSecondsPassed,
    markActiveCycleAsFinished,
  } = useCyclesContext()

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    let passedTimeInterval: number

    if (activeCycle) {
      passedTimeInterval = setInterval(() => {
        const passedTime = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startTime),
        )

        if (passedTime > totalSeconds) {
          markActiveCycleAsFinished()
          clearInterval(passedTimeInterval)
        } else {
          changeAmountSecondsPassed(passedTime)
        }
      }, 1000)
    }

    return () => {
      clearInterval(passedTimeInterval)
    }
  }, [
    activeCycle,
    activeCycleId,
    totalSeconds,
    changeAmountSecondsPassed,
    markActiveCycleAsFinished,
  ])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} | Time to focus!`
    }

    return () => {
      document.title = 'Pomodoro | Ignite'
    }
  }, [activeCycle, minutes, seconds])

  return (
    <CountDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <SeparatorContainer>:</SeparatorContainer>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountDownContainer>
  )
}
