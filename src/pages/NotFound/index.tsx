import { faHome } from '@fortawesome/free-solid-svg-icons'
import { ButtonLink } from '../../components/atoms/ButtonLink'
import { Footer } from '../../components/organisms/Footer'
import { Header } from '../../components/organisms/Header'
import { Container, Heading, IllustrationColumn, MessageColumn, PageGrid } from './styles'

import illustrationImg from '../../static/images/404.svg'

export function NotFound() {
  return (
    <PageGrid>
      <Header />

      <Container>
        <IllustrationColumn>
          <img
            src={illustrationImg}
            alt="Uma mulher segurando um celular, vagando no espaço. Ilustração."
            width={320}
            height={248}
          />
        </IllustrationColumn>

        <MessageColumn>
          <Heading>
            <h1>Página não encontrada</h1>
            <p>
              Ops! A página que você está procurando não existe ou foi desativada temporariamente.
            </p>
          </Heading>

          <ButtonLink
            to="/"
            icon={faHome}
            variant="success"
            aria-label="Voltar para a página inicial"
          />
        </MessageColumn>
      </Container>

      <Footer />
    </PageGrid>
  )
}
