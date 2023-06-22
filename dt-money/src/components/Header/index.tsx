import * as Dialog from '@radix-ui/react-dialog'
import { HeaderButton, HeaderContainer, HeaderContent } from './styles'

import logo from '../../assets/logo.svg'
import { NewTransactionModal } from './shards/NewTransactionModal'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <HeaderButton>New transaction</HeaderButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
