import { styled } from '@/styles'
import * as RadixTooltip from '@radix-ui/react-tooltip'

export const Root = styled(RadixTooltip.Root, {
  backgroundColor: '$gray-300',
})
export const Content = styled(RadixTooltip.Content, {
  padding: '$3 $4',
  backgroundColor: '$gray-900',
  borderRadius: '$sm',
})
export const Arrow = styled(RadixTooltip.Arrow)
