import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`
export const HeaderContent = styled.div`
  max-width: 1120px;
  width: 100%;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const HeaderButton = styled.button`
  height: 50px;
  padding: 0 1.25rem;

  border: 0;
  border-radius: 6px;

  background-color: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  font-weight: bold;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme['green-700']};
    transition: background-color 0.2s;
  }
`
