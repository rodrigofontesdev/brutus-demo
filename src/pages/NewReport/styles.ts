import styled from 'styled-components'

export const FilterByPeriod = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3.125rem;
  margin-bottom: 1.5625rem;

  > div {
    min-width: 20rem;
    flex-direction: row;
    align-items: flex-end;
    column-gap: 0.5rem;

    > :first-child,
    > :last-child {
      width: 9.375rem;
      flex-grow: 1;
    }
  }
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5625rem;
  margin-bottom: 3.125rem;
`

export const GrossIncomeCard = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 3.125rem;
  position: relative;
  background-color: rgb(0 0 0 / 12%);
  padding: 3.125rem 1.5625rem;
  border-radius: inherit;
`

export const InfoButton = styled.button`
  all: unset;
  position: absolute;
  top: 0.9375rem;
  right: 0.9375rem;
  color: ${(props) => props.theme['blue-50']};
  cursor: pointer;
  transition: filter 400ms;

  &:hover > svg {
    filter: brightness(80%);
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme['blue-400']};
  }
`

export const CardHeader = styled.header`
  h2 {
    color: ${(props) => props.theme['blue-400']};
    font: ${(props) => props.theme['title-sm']};
  }

  p {
    color: ${(props) => props.theme['blue-50']};
    font: ${(props) => props.theme['text-xs']};
  }
`

export const CardBody = styled.header`
  display: flex;
  flex-direction: column;
  row-gap: 1.5625rem;
`

export const CardFooter = styled.header`
  p {
    color: ${(props) => props.theme['blue-50']};
    font: ${(props) => props.theme['title-xs']};
  }

  span {
    color: ${(props) => props.theme['blue-50']};
    font: ${(props) => props.theme.title};
  }
`

export const ReportTotal = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1.5625rem;
`

export const TotalHeading = styled.div`
  p:first-of-type {
    color: ${(props) => props.theme['blue-400']};
    font: ${(props) => props.theme.title};
    text-transform: uppercase;
  }

  p:last-of-type {
    color: ${(props) => props.theme['blue-50']};
    font: ${(props) => props.theme['text-sm']};
  }
`

export const Total = styled.div`
  min-width: 22.5rem;
  height: 3.75rem;
  display: flex;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme['blue-400']};
  padding: 1.25rem;
  border-radius: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgb(255 255 255 / 20%);
    border-radius: 0.5rem;
    box-shadow: ${(props) => props.theme['shadow-inner']};
  }

  span {
    color: ${(props) => props.theme['blue-50']};
    font: ${(props) => props.theme['title-sm']};
    z-index: 1;
  }
`
