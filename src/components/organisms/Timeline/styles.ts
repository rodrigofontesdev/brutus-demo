import styled from 'styled-components'

export const TimelineStyle = styled.aside`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.625rem;
  background-color: rgb(0 0 0 / 25%);
  padding: 3.125rem 1.5625rem 4.6875rem;
  overflow-y: auto;
  scrollbar-width: none;

  > span {
    color: ${(props) => props.theme['blue-50']};
    font: ${(props) => props.theme['title-xs']};
  }
`
