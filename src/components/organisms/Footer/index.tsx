import { FooterLinks, MainFooter } from './styles'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const appName = import.meta.env.VITE_APP_NAME

  return (
    <MainFooter>
      <FooterLinks>
        <p>
          &copy; {currentYear} - {appName}. Developed by{' '}
          <a href="https://rodrigofontes.dev" target="_blank">
            Rodrigo Fontes
          </a>
        </p>

        <a href="#" target="_blank">
          Política de privacidade
        </a>

        <a href="#" target="_blank">
          Termos de uso
        </a>
      </FooterLinks>
    </MainFooter>
  )
}
