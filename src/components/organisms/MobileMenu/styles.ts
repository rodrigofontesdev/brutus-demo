import styled from 'styled-components'

export const MobileMenuStyle = styled.nav`
  height: 4.6875rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 1px;
  background-color: ${({ theme }) => theme.blue[700]};
`

export const ActionButton = styled.button<{ $isActive: boolean }>`
  all: unset;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.blue[400] : theme.black.alpha[30]};
  color: ${({ theme }) => theme.blue[50]};
  cursor: pointer;
  transition: background ${({ theme }) => theme.duration.normal};
  pointer-events: auto !important; // prevents Radix Dialog from override this property

  &:hover {
    background-color: ${({ theme }) => theme.blue[400]};
  }

  &:focus {
    outline: ${({ theme }) => theme.outline.blue[400]};
  }
`
