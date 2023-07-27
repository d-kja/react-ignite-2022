import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display: flex;
  max-width: 112rem;
  margin: 3.2rem auto;

  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    padding: 0 3.2rem;
  }
`
export const NavbarImage = styled.img``
export const NavbarOptions = styled.div`
  position: relative;

  display: flex;
  gap: 1.2rem;
`

type AmountOfProductsProps = {
  amount: string
}
export const AmountOfProducts = styled.span<AmountOfProductsProps>`
  position: absolute;

  right: -10px;
  top: -10px;

  &::after {
    content: '${(props) => props.amount}';
    display: ${(props) => (Number(props.amount) > 0 ? 'flex' : 'none')};

    width: 20px;
    height: 20px;

    border-radius: 999px;

    justify-content: center;
    align-items: center;

    font-size: ${(props) => props.theme['font-sm']};
    font-weight: 700;
    line-height: 0%;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['primary-600']};
  }
`
