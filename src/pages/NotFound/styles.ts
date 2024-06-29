import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: calc(61.25rem + 3.125rem);
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  gap: 3.125rem;
  padding: 3.125rem 1.5625rem;
  margin: 0 auto;

  @media (max-width: 640px) {
    justify-content: center;
    flex-direction: column;
  }
`

export const IllustrationColumn = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  @media (max-width: 640px) {
    width: 100%;
  }
`

export const MessageColumn = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.5625rem;

  @media (max-width: 640px) {
    width: 100%;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5625rem;

    h1 {
      font: ${(props) => props.theme['title-lg']};
      text-align: center;

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

  a {
    margin: 0 auto;
  }
`
