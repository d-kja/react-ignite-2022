import styled from 'styled-components'

export type ButtonVariants = 'primary' | 'secondary'

interface ButtonContainerProps {
  variant: ButtonVariants
}

enum backgroundVariant {
  'primary' = 'green-500',
  'primary-hover' = 'green-600',
  'primary-disabled' = 'green-600',
  //
  'secondary' = 'red-500',
  'secondary-hover' = 'red-600',
  'secondary-disabled' = 'red-600',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  max-width: 64.8rem;
  width: 100%;

  display: flex;
  gap: 0.8rem;

  justify-content: center;
  align-items: center;

  border-radius: 8px;

  color: ${(props) => props.theme['base-100']};
  font-size: var(--font-md);
  font-weight: bold;

  padding-top: 1.7rem;
  padding-bottom: 1.7rem;

  transition: 0.2s background-color;

  background-color: ${(props) => props.theme[backgroundVariant[props.variant]]};

  &:hover {
    background-color: ${(props) =>
      props.theme[backgroundVariant[`${props.variant}-hover`]]};
  }
  &:disabled {
    background-color: ${(props) =>
      props.theme[backgroundVariant[`${props.variant}-disabled`]]};
  }
`

/* 
// enum ButtonVariantBackgroundColor {
//   "primary" = "var(--green-500)",
//   "primary-hover" = "var(--green-600)",
//   "primary-disabled" = "var(--green-600)",
//   //
//   "secondary" = "var(--red-500)",
//   "secondary-hover" = "var(--red-600)",
//   "secondary-disabled" = "var(--red-600)",
// }

  ${(props) => css`
    background-color: ${ButtonVariantBackgroundColor[props.variant]};

    &:hover {
      background-color: ${ButtonVariantBackgroundColor[
        `${props.variant}-hover`
      ]};
    }

    &:disabled {
      background-color: ${ButtonVariantBackgroundColor[
        `${props.variant}-disabled`
      ]};
    }
  `} 
*/
