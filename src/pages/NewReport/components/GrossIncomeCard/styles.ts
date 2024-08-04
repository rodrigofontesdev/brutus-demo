import styled from 'styled-components'

export const Card = styled.article`
  display: grid;
  row-gap: ${({ theme }) => theme.space[10]};
  position: relative;
  padding-top: ${({ theme }) => theme.space[10]};
  padding-bottom: ${({ theme }) => theme.space[10]};
  padding-left: ${({ theme }) => theme.space[5]};
  padding-right: ${({ theme }) => theme.space[5]};
`

export const InfoButton = styled.button`
  all: unset;
  position: absolute;
  top: ${({ theme }) => theme.space[3]};
  right: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.blue[50]};
  cursor: pointer;
  transition: filter ${({ theme }) => theme.duration.normal};

  &:hover > svg {
    filter: brightness(80%);
  }

  &:focus {
    outline: ${({ theme }) => theme.outline.blue[400]};
  }
`

export const CardHeader = styled.header`
  h2 {
    color: ${({ theme }) => theme.blue[400]};
    font-size: ${({ theme }) => theme.font.xl};
  }

  p {
    color: ${({ theme }) => theme.blue[50]};
    font-size: ${({ theme }) => theme.font.xs};
  }
`

export const CardBody = styled.header`
  display: grid;
  row-gap: ${({ theme }) => theme.space[5]};
`

export const CardFooter = styled.header`
  p {
    color: ${({ theme }) => theme.blue[50]};
    font-size: ${({ theme }) => theme.font.lg};
    font-weight: ${({ theme }) => theme.font.bold};
  }

  span {
    color: ${({ theme }) => theme.blue[50]};
    font-size: ${({ theme }) => theme.font['2xl']};
    font-weight: ${({ theme }) => theme.font.bold};
  }
`
