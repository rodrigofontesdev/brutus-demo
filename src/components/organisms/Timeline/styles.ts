import styled from 'styled-components'

export const TimelineStyle = styled.aside`
  width: 100%;
  height: 100vh;
  height: 100svh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.blue[700]};
  transform: translateY(100%);
  overflow-y: auto;
  scrollbar-width: none;

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    width: auto;
  }

  @media (min-width: ${({ theme }) => theme.screen.lg}) {
    width: 11.25rem;
    transform: translate(0, 0);
  }
`

export const TimelineInner = styled.div`
  min-height: 100%;
  display: grid;
  justify-content: center;
  row-gap: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.black.alpha[25]};
  padding-top: ${({ theme }) => theme.space[5]};
  padding-bottom: ${({ theme }) => theme.space[30]};
  padding-left: ${({ theme }) => theme.space[5]};
  padding-right: ${({ theme }) => theme.space[5]};

  > span {
    color: ${({ theme }) => theme.blue[50]};
    font-size: ${({ theme }) => theme.font.lg};
    font-weight: ${({ theme }) => theme.font.bold};
    text-align: center;
  }

  @media (min-width: ${({ theme }) => theme.screen.md}) {
    padding-top: ${({ theme }) => theme.space[10]};
    padding-bottom: ${({ theme }) => theme.space[10]};
  }
`
