import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import { useFormContext } from 'react-hook-form'
import { ToggleButton, ToggleRoot } from '../../../components/primitives/Toggle'
import {
  AddressAdditionalInfoInput,
  AddressFields,
  AddressInput,
  AddressLabel,
  AddressNumberInput,
  CepInput,
  CheckoutCard,
  CheckoutForm,
  CityInput,
  FormFirstSplit,
  FormSecondSplit,
  FormSplit,
  StateInput,
  UfInput,
} from '../checkout.style'

export const OrderForm = () => {
  const { register } = useFormContext()

  return (
    <CheckoutForm>
      <strong>Complete seu pedido</strong>
      <CheckoutCard className="mt-4">
        <AddressLabel variant="primary">
          <MapPinLine size={22} />
          <div>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </AddressLabel>

        <AddressFields>
          <CepInput
            mask={'99999-999'}
            maskPlaceholder={null}
            placeholder="CEP"
            required
            {...register('cep')}
          />
          <AddressInput placeholder="Rua" required {...register('address')} />
          <FormSplit>
            <FormFirstSplit>
              <AddressNumberInput
                mask={'99999'}
                maskPlaceholder={null}
                placeholder="N°"
                required
                {...register('addressNumber')}
              />
              <AddressAdditionalInfoInput
                placeholder="Complemento"
                {...register('additionalInfo')}
              />
            </FormFirstSplit>
            <FormSecondSplit>
              <StateInput
                placeholder="Estado"
                required
                {...register('state')}
              />
              <CityInput placeholder="Cidade" required {...register('city')} />
              <UfInput placeholder="UF" required {...register('uf')} />
            </FormSecondSplit>
          </FormSplit>
        </AddressFields>
      </CheckoutCard>
      <CheckoutCard>
        <AddressLabel variant="secondary">
          <CurrencyDollar size={22} />
          <div>
            <p>Pagamento</p>
            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </div>
        </AddressLabel>

        <ToggleRoot>
          <ToggleButton value="0">
            <CreditCard size={22} />
            CARTÃO DE CŔEDITO
          </ToggleButton>
          <ToggleButton value="1">
            <Bank size={22} />
            CARTÃO DE DEBITO
          </ToggleButton>
          <ToggleButton value="2">
            <Money size={22} />
            DINHEIRO
          </ToggleButton>
        </ToggleRoot>
      </CheckoutCard>
    </CheckoutForm>
  )
}
