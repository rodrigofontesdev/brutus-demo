import styled from 'styled-components'

export const TimelineStyle = styled.aside`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.black.alpha[25]};
  padding-top: ${({ theme }) => theme.space[10]};
  padding-bottom: ${({ theme }) => theme.space[15]};
  padding-left: ${({ theme }) => theme.space[5]};
  padding-right: ${({ theme }) => theme.space[5]};
  overflow-y: auto;
  scrollbar-width: none;

  > span {
    color: ${({ theme }) => theme.blue[50]};
    font-size: ${({ theme }) => theme.font.lg};
    font-weight: ${({ theme }) => theme.font.bold};
  }
`
