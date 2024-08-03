import styled from 'styled-components'

export const Steps = styled.div`
  position: relative;
`

export const Step = styled.div<{ $active: boolean }>`
  position: relative;
  display: ${({ $active }) => ($active ? 'block' : 'none')};
`
