import styled from 'styled-components'

export const Steps = styled.div`
  width: 100%;
  position: relative;
`

export const Step = styled.div<{ $active: boolean }>`
  width: 100%;
  position: relative;
  display: ${(props) => (props.$active ? 'block' : 'none')};
`
