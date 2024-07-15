import styled from 'styled-components'

export const MainStyle = styled.main`
  display: flex;
  justify-content: space-between;
  margin-top: 3.125rem;
`

export const EntrepreneurInfo = styled.section`
  width: 100%;
  max-width: 22.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.5625rem;
  padding-top: 3.125rem;

  h1 {
    color: ${(props) => props.theme['blue-50']};
    font: ${(props) => props.theme['text-sm']};

    span {
      display: block;
      color: ${(props) => props.theme['blue-400']};
      font: ${(props) => props.theme['title']};
    }
  }
`

export const Report = styled.section`
  width: 42.375rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 3.125rem;
  background-color: rgb(0 0 0 / 12%);
  padding: 3.125rem;
  border-radius: inherit;
`

export const ReportHeading = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: ${(props) => props.theme['blue-50']};
    font: ${(props) => props.theme['title']};
  }
`

export const ReportBody = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5625rem;
`

export const ReportBodyItem = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr;
  column-gap: 1.5625rem;

  h3 {
    grid-column: 1 / -1;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['blue-400']};
    font: ${(props) => props.theme['title-xs']};
  }

  > div:last-child {
    input {
      all: unset;
      height: 38px;
      color: ${(props) => props.theme['blue-50']};
      font: ${(props) => props.theme['input-sm']};
      padding-left: 0.25rem;
      margin-top: 0.5rem;
      border-radius: 0.5rem;

      &:not(:disabled):focus {
        outline: ${(props) => props.theme['outline']};
      }
    }
  }
`

export const ReportTotal = styled.footer`
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
  flex-grow: 1;
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
