import styled from 'styled-components'

export const MainFooter = styled.footer`
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1.5625rem;

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 1.5625rem;
    row-gap: 0.75rem;

    li {
      list-style: none;
      font: ${(props) => props.theme['text-xs']};

      &:first-of-type {
        text-align: center;
      }
    }
  }
`
