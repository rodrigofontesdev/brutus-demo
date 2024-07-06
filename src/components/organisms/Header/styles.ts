import styled from 'styled-components'

export const HeaderStyle = styled.header`
  min-height: calc(6.25rem + 50px); // padding and image's height
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 3.125rem;
  padding-bottom: 3.125rem;

  > a {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

export const Actions = styled.div`
  display: flex;
  column-gap: 1.5625rem;
`
