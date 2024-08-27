import styled from 'styled-components'

export const HelpModal = styled.div`
  max-height: 31.25rem;
  padding-right: ${({ theme }) => theme.space[3]};
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => `${theme.blue[700]} ${theme.black.alpha[50]}`};
`

export const TradeHelpStyle = styled(HelpModal)`
  p {
    color: ${({ theme }) => theme.blue[50]};
    font-size: ${({ theme }) => theme.font.sm};
    line-height: ${({ theme }) => theme.line.lg};
    margin-bottom: ${({ theme }) => theme.space[5]};
  }
`

export const IndustryHelpStyle = styled(HelpModal)`
  p {
    color: ${({ theme }) => theme.blue[50]};
    font-size: ${({ theme }) => theme.font.sm};
    line-height: ${({ theme }) => theme.line.lg};
    margin-bottom: ${({ theme }) => theme.space[5]};
  }
`

export const ServicesHelpStyle = styled(HelpModal)`
  p {
    color: ${({ theme }) => theme.blue[50]};
    font-size: ${({ theme }) => theme.font.sm};
    line-height: ${({ theme }) => theme.line.lg};
    margin-bottom: ${({ theme }) => theme.space[5]};
  }
`
