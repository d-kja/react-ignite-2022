import React from 'react'
import { Container, Label, Step, Steps } from './style'

export interface MultistepProps {
  steps: number
  currentStep?: number
}

export const Multistep: React.FC<MultistepProps> = ({
  steps,
  currentStep = 1,
}) => {
  return (
    <Container>
      <Label>
        Step {currentStep} out of {steps}
      </Label>

      <Steps
        css={{
          '--steps-size': steps,
        }}
      >
        {Array.from({ length: steps }, (_, i) => i + 1).map((step) => (
          <Step key={step} active={step <= currentStep} />
        ))}
      </Steps>
    </Container>
  )
}

Multistep.displayName = 'Multistep'
