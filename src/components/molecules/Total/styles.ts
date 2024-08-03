import styled from 'styled-components'

export const TotalStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: ${({ theme }) => theme.space[5]};
`

export const Heading = styled.div`
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
  max-width: 22.5rem;
  display: flex;
  align-items: center;
  flex-grow: 1;
  position: relative;
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
    z-index: 1;
  }
`
