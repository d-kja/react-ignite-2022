import styled from 'styled-components'

export const TooltipContainer = styled.span`
  position: relative;
  width: 0px;
  height: 0px;

  span {
    position: absolute;
    margin-top: -8.5rem;

    display: flex;
    align-items: center;

    min-width: 20rem;
    padding: 1rem 1.5rem;
    border-radius: 4px;

    font-size: 1.4rem;

    color: ${(props) => props.theme['base-200']};
    background-color: ${(props) => props.theme['base-500']};

    &::after {
      content: '';
      position: absolute;

      bottom: -1.5rem;

      width: 1.5rem;
      height: 1.5rem;

      background-color: ${(props) => props.theme['base-500']};
      clip-path: polygon(50% 70%, 0 0, 100% 0);
    }
  }
`
