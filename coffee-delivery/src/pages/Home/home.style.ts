import styled from 'styled-components'

export const HomeContainer = styled.section`
  background-image: url('/home-background.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
`

export const HomeContent = styled.div`
  max-width: 112rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  padding: 3.2rem 0;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  margin: 9.2rem 0;

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    gap: 3.2rem;
    padding: 0 3.2rem;
    margin: 4.2rem 0;

    align-items: center;
  }
`

export const HeaderTitleContent = styled.div`
  max-width: 58.8rem;

  h1 {
    font-weight: 800;
    font-family: 'Baloo 2', cursive;
    font-size: ${(props) => props.theme['font-5xl']};
    line-height: 130%;

    color: ${(props) => props.theme['base-800']};
  }
  p {
    margin-top: 1.6rem;
    font-size: ${(props) => props.theme['font-2xl']};
    color: ${(props) => props.theme['base-700']};
  }
`

export const HeaderInfo = styled.div`
  margin-top: 6.6rem;

  display: flex;
  gap: 4rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

type ItemColors = 'orange' | 'purple' | 'gray' | 'yellow'

interface ItemProps {
  variant: ItemColors
}

enum ItemBackgroundColor {
  'purple' = 'secondary-500',
  'gray' = 'base-600',
  'orange' = 'primary-600',
  'yellow' = 'primary-500',
}

export const Item = styled.span<ItemProps>`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  font-size: ${(props) => props.theme['font-lg']};
  color: ${(props) => props.theme['base-600']};

  svg {
    display: flex;
    padding: 0.8rem;
    border-radius: 9999px;

    background: ${(props) => props.theme[ItemBackgroundColor[props.variant]]};
    color: ${(props) => props.theme['bg-base']};
    width: 3.2rem;
    height: 3.2rem;
  }
`

export const HeaderImage = styled.img`
  max-height: 36rem;
`

export const ProductsSection = styled.main`
  display: flex;
  flex-direction: column;

  gap: 3.4rem;

  @media (max-width: 900px) {
    padding: 0 3.2rem;
  }
`

export const ProductsTitle = styled.strong`
  color: ${(props) => props.theme['base-700']};
  font-family: 'Baloo 2', cursive;

  font-size: ${(props) => props.theme['font-4xl']};
  font-weight: 800;

  text-align: start;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25.6rem, 1fr));

  place-items: center;

  grid-auto-rows: max-content;
  gap: 3.2rem;
`
