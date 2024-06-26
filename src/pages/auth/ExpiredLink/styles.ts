import styled from 'styled-components'

export const Container = styled.div`
  max-width: 50rem;
  margin-right: auto;
  margin-left: auto;
  padding: 6.25rem 0;

  @media (max-width: 640px) {
    padding: 3.125rem 0;
  }
`

export const Card = styled.section`
  width: 100%;
  position: relative;
  background-color: ${(props) => props.theme['blue-700']};
  padding: 3.125rem;
  border-radius: 0.5rem;
  box-shadow: ${(props) => props.theme.shadow};

  @media (max-width: 640px) {
    padding: 1.5625rem;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.5625rem;
    position: relative;
    margin-bottom: 1.5625rem;

    h1 {
      color: ${(props) => props.theme['blue-400']};
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

  header + a {
    position: relative;
    margin: 1.5625rem auto 0;
  }
`

export const Overlay = styled.div`
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgb(0 0 0 / 12%);
  border-radius: 0.5rem;
`
