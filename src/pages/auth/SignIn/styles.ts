import styled from 'styled-components'

export const Container = styled.div`
  max-width: 42.5rem;
  margin-right: auto;
  margin-left: auto;
  padding: 6.25rem 0;

  @media (max-width: 640px) {
    padding: 3.125rem 0;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.5625rem;
    margin-bottom: 6.25rem;

    h1 {
      font: ${(props) => props.theme['title-lg']};
      text-align: center;
      text-transform: uppercase;

      @media (max-width: 640px) {
        font-size: 1.875rem;
      }
    }

    p {
      font: ${(props) => props.theme['text']};
      text-align: center;

      @media (max-width: 640px) {
        font: ${(props) => props.theme['text-sm']};
      }
    }
  }
`

export const SignInForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 3.75rem;
  column-gap: 1.25rem;
  margin-bottom: 3.125rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr 3.125rem;
    column-gap: 0.625rem;
  }

  > button[type='submit'] {
    margin-top: 1.75rem;
  }
`
export const CreateAccount = styled.div`
  padding: 0.625rem;
  text-align: center;

  a {
    font: ${(props) => props.theme['text-sm']};
  }
`
