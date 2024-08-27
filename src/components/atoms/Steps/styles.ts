import styled from 'styled-components'

export const StepsStyle = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: ${({ theme }) => theme.space[2]};
`

export const StepStyle = styled.span<{ $active: boolean }>`
  height: 0.375rem;
  display: block;
  background-color: ${({ $active, theme }) => ($active ? theme.blue[400] : theme.black.alpha[15])};
  border-radius: ${({ theme }) => theme.radii.md};
`
