import styled from 'styled-components'

export const ReportItemStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
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
