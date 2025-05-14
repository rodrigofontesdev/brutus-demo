import styled, { css } from 'styled-components'
import { InputVariants } from '.'

export const Checkmark = styled.span<{ $variant: InputVariants }>`
  ${({ $variant }) => {
    switch ($variant) {
      case 'large':
        return css`
          width: 1.5rem;
          height: 1.5rem;

          &::after {
            top: 0.375rem;
            left: 0.375rem;
            width: 0.75rem;
            height: 0.75rem;
          }
        `
      default:
        return css`
          width: 1rem;
          height: 1rem;

          &::after {
            top: 0.25rem;
            left: 0.25rem;
            width: 0.5rem;
            height: 0.5rem;
          }
        `
    }
  }}

  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.blue[400]};
  box-shadow: inset 0 4px 4px 0 rgb(0 0 0 / 0.25);
  border-radius: ${({ theme }) => theme.radii.full};
  transition: background-color ${({ theme }) => theme.duration.normal};
  cursor: pointer;

  &::after {
    content: '';
    display: none;
    position: absolute;
    background-color: ${({ theme }) => theme.blue[50]};
    border-radius: ${({ theme }) => theme.radii.full};
  }
`

export const InputStyle = styled.input<{ $variant: InputVariants }>`
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'large':
        return css`
          font-size: ${theme.font.md};
          padding: ${theme.space[4]};
        `
      default:
        return css`
          font-size: ${theme.font.sm};
          padding: ${theme.space[2]};
        `
    }
  }}

  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.blue[50]};
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: ${({ theme }) => theme.font.semibold};
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.blue[50]};
    opacity: 1;
  }

  &:read-only {
    cursor: default;
  }

  &:not(:disabled):focus {
    outline: none;
  }

  &[type='radio'],
  &[type='checkbox'] {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    cursor: pointer;
  }

  &[type='checkbox'] ~ ${Checkmark} {
    border-radius: ${({ $variant, theme }) => ($variant === 'large' ? theme.radii.md : '0.25rem')};
  }

  &[type='checkbox'] ~ ${Checkmark}::after {
    top: ${({ $variant }) => ($variant === 'large' ? '0.25rem' : '0')};
    left: ${({ $variant }) => ($variant === 'large' ? '0.5rem' : '0.25rem')};
    width: 0.3125rem;
    height: 0.625rem;
    background-color: transparent;
    border-width: 0 3px 3px 0;
    border-style: solid;
    border-color: ${({ theme }) => theme.blue[50]};
    border-radius: 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &:focus ~ ${Checkmark} {
    outline: ${({ theme }) => theme.outline.blue.alpha[30]};
  }

  &:checked ~ ${Checkmark}::after {
    display: block;
  }
`

export const Prefix = styled.span<{ $variant: InputVariants }>`
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'large':
        return css`
          font-size: ${theme.font.md};
          padding-left: ${({ theme }) => theme.space[4]};
          padding-right: ${({ theme }) => theme.space[4]};
        `
      default:
        return css`
          font-size: ${theme.font.sm};
          padding-left: ${({ theme }) => theme.space[2]};
          padding-right: ${({ theme }) => theme.space[2]};
        `
    }
  }}

  color: ${({ theme }) => theme.blue[50]};
  border-right: 2px solid ${({ theme }) => theme.white.alpha[5]};
  pointer-events: none;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.blue[400]};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadow.inner.md};

  &:has(${InputStyle}:read-only) {
    background-color: ${({ theme }) => theme.blue[800]};
  }

  &:has(${InputStyle}:not([type='radio']):not([type='checkbox'])) {
    position: relative;
  }

  &:has(${InputStyle}:not([type='radio']):not([type='checkbox']):focus) {
    outline: ${({ theme }) => theme.outline.blue.alpha[30]};
  }
`
