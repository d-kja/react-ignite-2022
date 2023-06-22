import styled from 'styled-components'
import { Input } from '../../components/primitives/Input'
import { InputWithMask } from '../../components/primitives/Input/InputWithMask'

export const CheckoutContainer = styled.form`
  max-width: 112rem;
  margin: 0 auto;

  display: flex;
  gap: 3.2rem;

  strong {
    font-size: ${(props) => props.theme['font-xl']};
    line-height: 130%;

    color: ${(props) => props.theme['base-700']};
  }

  @media (max-width: 920px) {
    flex-direction: column;
    padding: 0 3.2rem;
  }
`
export const CheckoutForm = styled.div`
  flex-grow: 2;

  max-width: 64rem;
  width: 100%;

  .mt-4 {
    margin-top: 1.6rem;
  }

  @media (max-width: 920px) {
    margin-left: auto;
    margin-right: auto;
  }
`
export const CheckoutSummary = styled.section`
  flex-grow: 1;

  max-width: 44.8rem;
  width: 100%;
`
export const CheckoutSummaryCard = styled.div`
  margin-top: 1.6rem;

  width: 100%;
  padding: 4rem;
  border-radius: 6px 44px;

  background-color: ${(props) => props.theme['base-100']};
`
export const CheckoutCard = styled.div`
  margin-top: 1.6rem;

  width: 100%;
  padding: 4rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-100']};
`

enum AddressLabelVariants {
  'primary' = 'primary-600',
  'secondary' = 'secondary-500',
}
type AddressLabelProps = {
  variant: keyof typeof AddressLabelVariants
}
export const AddressLabel = styled.div<AddressLabelProps>`
  display: flex;
  gap: 0.8rem;

  line-height: 130%;

  svg {
    color: ${(props) => props.theme[AddressLabelVariants[props.variant]]};
  }
  p {
    font-size: ${(props) => props.theme['font-lg']};
    color: ${(props) => props.theme['base-700']};
  }
  span {
    font-size: ${(props) => props.theme['font-md']};
    color: ${(props) => props.theme['base-600']};
  }
`
export const AddressFields = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`
export const FormSplit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  div {
    display: grid;
    gap: 1.2rem;
  }
`
export const FormFirstSplit = styled.div`
  grid-template-columns: 1fr 2fr;
`
export const FormSecondSplit = styled.div`
  grid-template-columns: 2fr 3fr 1fr;
`
export const FormInputBase = styled(Input)`
  width: 100%;
`
export const FormInputBaseWithMask = styled(InputWithMask)``
export const CepInput = styled(FormInputBaseWithMask)`
  max-width: 20rem;
`
export const AddressInput = styled(FormInputBase)`
  max-width: 56rem;
`
export const AddressNumberInput = styled(FormInputBaseWithMask)``
export const AddressAdditionalInfoInput = styled(FormInputBase)`
  width: 100%;
`
export const StateInput = styled(FormInputBase)``
export const CityInput = styled(FormInputBase)``
export const UfInput = styled(FormInputBase)``

export const Divider = styled.hr`
  max-width: 36.8rem;
  width: 100%;
  border: none;

  display: inline-block;

  margin: 2.4rem auto;

  border-bottom: 1px solid ${(props) => props.theme['base-300']};
`
export const SummaryPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  margin-bottom: 2.4rem;
`
export const SummaryPrice = styled.div`
  display: flex;
  justify-content: space-between;

  line-height: 130%;

  color: ${(props) => props.theme['base-600']};

  p {
    font-size: ${(props) => props.theme['font-md']};
  }
  span {
    font-size: ${(props) => props.theme['font-lg']};
  }
  strong {
    font-size: ${(props) => props.theme['font-2xl']};
    color: ${(props) => props.theme['base-700']};
  }
`
