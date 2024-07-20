import styled from 'styled-components'

export const MainStyle = styled.main`
  display: flex;
  justify-content: space-between;
  margin-top: 3.125rem;
`

export const Entrepreneur = styled.section`
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
  padding: 3.125rem;
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
