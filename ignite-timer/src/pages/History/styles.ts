import styled from 'styled-components'

export const HistoryContainer = styled.div`
  flex: 1;
  padding: 5.6rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.4rem;
    color: ${(props) => props.theme['base-100']};
  }
`
export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;

  margin-top: 3.2rem;

  table {
    width: 100%;
    min-width: 600px;

    border-collapse: collapse;

    th {
      background-color: ${(props) => props.theme['base-500']};
      padding: 1.6rem;
      text-align: left;
      color: ${(props) => props.theme['base-100']};

      font-size: 1.4rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 2.4rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 2.4rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['base-600']};
      border-top: 4px solid ${(props) => props.theme['base-700']};

      padding: 1.6rem;
      font-size: 1.4rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 2.4rem;
      }
      &:last-child {
        padding-right: 2.4rem;
      }
    }
  }
`

// enum STATUS_COLOR {
//   'yellow' = 'yellow-500',
//   'green' = 'green-500',
//   'red' = 'red-500',
// }

// eslint-disable-next-line no-unused-vars
const STATUS_COLOR = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const // same as enum (readonly)
interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR // because JS can't read an object (it's keys) type directly so we need to combine keyof and typeof
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &::before {
    content: '';
    width: 0.8rem;
    height: 0.8rem;

    border-radius: 50%;
    background-color: ${(props) =>
      props.theme[STATUS_COLOR[props.statusColor]]};
  }
`
