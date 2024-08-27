import styled from 'styled-components'

export const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  grid-auto-flow: column;
  column-gap: ${({ theme }) => theme.space[2]};

  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    column-gap: ${({ theme }) => theme.space[5]};
  }
`

export const HeaderStyle = styled.header`
  min-height: 6.875rem;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  column-gap: ${({ theme }) => theme.space[2]};
  padding: ${({ theme }) => theme.space[5]};

  &:has(${Actions}) {
    position: relative;
    justify-content: space-between;
  }

  img {
    width: 9.375rem;
  }

  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    &:has(${Actions}) {
      justify-content: end;

      > a {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

    img {
      width: 12.9375rem;
    }
  }
`
