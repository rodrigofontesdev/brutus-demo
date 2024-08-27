import styled from 'styled-components'

export const TotalStyle = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  gap: ${({ theme }) => theme.space[5]};

  button {
    position: fixed;
    bottom: ${({ theme }) => theme.space[20]};
    right: ${({ theme }) => theme.space[5]};
    z-index: 25;
  }

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    button {
      position: relative;
      bottom: auto;
      right: auto;
      z-index: 0;
    }
  }

  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    justify-content: end;
    margin-left: auto;
  }
`

export const Heading = styled.div`
  flex: 1 0 auto;

  p:first-of-type {
    color: ${({ theme }) => theme.blue[400]};
    font-size: ${({ theme }) => theme.font['2xl']};
    font-weight: ${({ theme }) => theme.font.bold};
    text-transform: uppercase;
  }

  p:last-of-type {
    color: ${({ theme }) => theme.blue[50]};
    font-size: ${({ theme }) => theme.font.sm};
    line-height: ${({ theme }) => theme.line.lg};
  }
`

export const Amount = styled.div`
  display: flex;
  flex: 1 1 18.75rem;
  gap: ${({ theme }) => theme.space[5]};
`

export const Input = styled.div`
  position: relative;
  flex: 1;
  background-color: ${({ theme }) => theme.blue[400]};
  padding: ${({ theme }) => theme.space[4]};
  border-radius: ${({ theme }) => theme.radii.md};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${({ theme }) => theme.white.alpha[20]};
    border-radius: ${({ theme }) => theme.radii.md};
    box-shadow: ${({ theme }) => theme.shadow.inner.md};
  }

  span {
    color: ${({ theme }) => theme.blue[50]};
    font-size: ${({ theme }) => theme.font.xl};
    font-weight: ${({ theme }) => theme.font.bold};
    line-height: 0;
  }
`
