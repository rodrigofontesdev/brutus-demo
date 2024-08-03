import styled from 'styled-components'

export const Card = styled.article`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: 1fr 2.5rem;
  column-gap: 1px;

  a,
  button {
    all: unset;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.black.alpha[20]};
    color: ${({ theme }) => theme.blue[50]};
    cursor: pointer;
    transition: background ${({ theme }) => theme.duration.normal};

    &:hover {
      background-color: ${({ theme }) => theme.blue[400]};
      color: ${({ theme }) => theme.blue[50]};
    }

    &:focus {
      outline: ${({ theme }) => theme.outline.blue[400]};
    }
  }

  a:nth-child(2) {
    border-bottom-left-radius: ${({ theme }) => theme.radii.md};
  }

  button:nth-child(4) {
    border-bottom-right-radius: ${({ theme }) => theme.radii.md};
  }
`

export const Title = styled.div`
  grid-column: 1 / -1;
  padding: ${({ theme }) => theme.space[10]};

  h3 {
    color: ${({ theme }) => theme.blue[400]};
    font-size: ${({ theme }) => theme.font['2xl']};
    text-align: center;
    margin-bottom: ${({ theme }) => theme.space[1]};
  }

  p {
    color: ${({ theme }) => theme.blue[50]};
    font-family: ${({ theme }) => theme.font.md};
    line-height: ${({ theme }) => theme.line.xl};
    text-align: center;
  }
`
