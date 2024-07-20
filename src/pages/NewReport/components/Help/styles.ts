import styled from 'styled-components'

export const HelpModal = styled.div`
  max-height: 31.25rem;
  padding-right: 0.75rem;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme['blue-400']} ${(props) => props.theme['blue-800']};
`

export const TradeHelpStyle = styled(HelpModal)`
  p {
    color: ${(props) => props.theme['blue-50']};
    font: ${(props) => props.theme['text-sm']};
    margin-bottom: 1.5625rem;
  }
`

export const IndustryHelpStyle = styled(HelpModal)`
  p {
    color: ${(props) => props.theme['blue-50']};
    font: ${(props) => props.theme['text-sm']};
    margin-bottom: 1.5625rem;
  }
`

export const ServicesHelpStyle = styled(HelpModal)`
  p {
    color: ${(props) => props.theme['blue-50']};
    font: ${(props) => props.theme['text-sm']};
    margin-bottom: 1.5625rem;
  }
`
