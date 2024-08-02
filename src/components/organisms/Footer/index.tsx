import { Links, MainFooter } from './styles'

const currentYear = new Date().getFullYear()
const appName = import.meta.env.VITE_APP_NAME

export function Footer() {
  return (
    <MainFooter>
      <Links>
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
      </Links>
    </MainFooter>
  )
}
