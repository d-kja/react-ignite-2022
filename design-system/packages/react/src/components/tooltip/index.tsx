import React from 'react'

import * as RadixTooltip from '@radix-ui/react-tooltip'
import * as StyledTooltip from './style'

import { Text } from '../text'

export interface TooltipProps
  extends React.ComponentProps<typeof StyledTooltip.Root> {
  trigger: React.ReactNode
  text: string
}

export const Tooltip: React.FC<TooltipProps> = ({
  trigger,
  text,
  ...props
}) => {
  return (
    <RadixTooltip.Provider>
      <StyledTooltip.Root {...props}>
        <RadixTooltip.Trigger asChild>{trigger}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <StyledTooltip.Content>
            <Text
              size={'sm'}
              css={{
                fontWeight: '500',
                letterSpacing: '-0.2',
                lineHeight: '$short',
              }}
            >
              {text}
            </Text>
            <StyledTooltip.Arrow />
          </StyledTooltip.Content>
        </RadixTooltip.Portal>
      </StyledTooltip.Root>
    </RadixTooltip.Provider>
  )
}
