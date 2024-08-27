import styled from 'styled-components'

export const ReportItemStyle = styled.div`
  display: grid;
  grid-template-rows: auto auto;

  h3 {
    grid-column: 1 / -1;
    color: ${({ theme }) => theme.blue[400]};
    font-size: ${({ theme }) => theme.font.lg};
    margin-bottom: ${({ theme }) => theme.space[2]};
  }

  > div:nth-of-type(1),
  > div:nth-of-type(2) {
    margin-bottom: ${({ theme }) => theme.space[5]};
  }

  > div:last-child {
    input {
      all: unset;
      width: 100%;
      color: ${({ theme }) => theme.blue[50]};
      font-size: ${({ theme }) => theme.font.sm};
      padding-top: ${({ theme }) => theme.space[2]};
      padding-bottom: ${({ theme }) => theme.space[2]};
      padding-left: 2px;
      border-radius: ${({ theme }) => theme.radii.md};

      &:not(:disabled):focus {
        outline: ${({ theme }) => theme.outline.blue.alpha[30]};
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: ${({ theme }) => theme.space[5]};

    > div:nth-of-type(1),
    > div:nth-of-type(2) {
      margin-bottom: 0;
    }

    > div:last-child {
      input {
        margin-top: ${({ theme }) => theme.space[2]};
      }
    }
  }
`
