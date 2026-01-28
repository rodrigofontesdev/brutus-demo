import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  50% {
    opacity: 0.5;
  }
`

export const SkeletonStyle = styled.div<{ $width?: number; $height?: number; $radii?: number }>`
  width: ${({ $width }) => ($width ? `${$width / 16}rem` : '100%')};
  height: ${({ $height }) => ($height ? `${$height / 16}rem` : '100%')};
  border-radius: ${({ $radii, theme }) => ($radii ? `${$radii / 16}rem` : theme.radii.md)};
  background-color: ${({ theme }) => theme.black.alpha[15]};
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`
