import styled from 'styled-components'

export const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  grid-auto-flow: column;
  gap: ${({ theme }) => theme.space[5]};
`

export const HeaderStyle = styled.header`
  display: grid;
  justify-content: center;
  padding: ${({ theme }) => theme.space[5]};

  &:has(${Actions}) {
    position: relative;
    justify-content: end;
    padding-left: 0;
    padding-right: 0;

    > a {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  img {
    width: 12.9375rem;
  }
`
