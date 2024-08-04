import styled from 'styled-components'

export const ReportItemStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: auto auto;
  column-gap: ${({ theme }) => theme.space[5]};

  h3 {
    grid-column: 1 / -1;
    color: ${({ theme }) => theme.blue[400]};
    font-size: ${({ theme }) => theme.font.lg};
    margin-bottom: ${({ theme }) => theme.space[2]};
  }

  > div:last-child {
    input {
      all: unset;
      color: ${({ theme }) => theme.blue[50]};
      font-size: ${({ theme }) => theme.font.sm};
      padding-top: ${({ theme }) => theme.space[2]};
      padding-bottom: ${({ theme }) => theme.space[2]};
      padding-left: 2px;
      margin-top: ${({ theme }) => theme.space[2]};
      border-radius: ${({ theme }) => theme.radii.md};

      &:not(:disabled):focus {
        outline: ${({ theme }) => theme.outline.blue.alpha[30]};
      }
    }
  }
`
