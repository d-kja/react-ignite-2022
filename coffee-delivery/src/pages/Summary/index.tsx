import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import {
  SummaryCard,
  SummaryContainer,
  SummaryIcons,
  SummaryInfo,
  SummarySlip,
} from './summary.style'

const initialStateData = {
  address: 'Rua João Daniel Martinelli, 102',
  uf: 'RS',
  city: 'Porto Alegre',
  state: 'Farrapos',
}

export const Summary = () => {
  const [address, setAddress] = useState(initialStateData)

  useEffect(() => {
    try {
      const localStorageAddressData = localStorage.getItem(
        '@coffee-delivery/user-address-v1.0.0',
      )

      if (localStorageAddressData) {
        setAddress(JSON.parse(localStorageAddressData))
      }
    } catch (error) {}
  }, [])

  return (
    <SummaryContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <SummaryCard>
        <SummaryInfo>
          <SummarySlip>
            <SummaryIcons variant="secondary">
              <MapPin weight="fill" size={16} />
            </SummaryIcons>

            <div>
              <span>
                Entrega em <strong>{address.address}</strong>
              </span>
              <span>
                {address.state} - {address.city}, {address.uf}
              </span>
            </div>
          </SummarySlip>

          <SummarySlip>
            <SummaryIcons variant="primary">
              <Timer weight="fill" size={16} />
            </SummaryIcons>

            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </SummarySlip>

          <SummarySlip>
            <SummaryIcons variant="alt">
              <CurrencyDollar size={16} />
            </SummaryIcons>

            <div>
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </div>
          </SummarySlip>
        </SummaryInfo>
        <img src="/shipping.svg" alt="shipping product" />
      </SummaryCard>
    </SummaryContainer>
  )
}
