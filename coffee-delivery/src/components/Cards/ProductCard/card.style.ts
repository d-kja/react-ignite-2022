import styled from 'styled-components'

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 25.6rem;
  width: 100%;

  padding-top: 2rem;
  position: relative;
`

export const CardImage = styled.img`
  position: absolute;

  max-width: 12rem;
  max-height: 12rem;
  width: 100%;

  margin: -2rem auto 0;
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 100%;
  height: 31rem;

  padding: 2rem;

  background-color: ${(props) => props.theme['base-100']};
  border-radius: 6px 36px;
`

export const CardInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  flex-direction: column;
`

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  gap: 0.8rem;

  strong {
    color: ${(props) => props.theme['base-700']};
    font-size: ${(props) => props.theme['font-2xl']};
    font-weight: 700;
  }

  span {
    color: ${(props) => props.theme['base-500']};
  }
`

export const CardOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 0.8rem;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: calc(11.2rem - 2rem);

  gap: 0.4rem;
`

export const Tag = styled.span`
  height: 2.1rem;
  border-radius: 99999px;
  padding: 0.4rem 0.8rem;

  font-weight: 700;
  line-height: 130%;
  font-size: ${(props) => props.theme['font-xs']};
  text-transform: uppercase;

  color: ${(props) => props.theme['primary-600']};
  background-color: ${(props) => props.theme['primary-400']};
`

export const PriceContainer = styled.span`
  line-height: 130%;
  font-weight: 400;
  font-size: ${(props) => props.theme['font-md']};

  color: ${(props) => props.theme['base-600']};

  strong {
    font-family: 'Baloo 2', cursive;
    font-size: ${(props) => props.theme['font-3xl']};
    font-weight: 800;
  }
`
