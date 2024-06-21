import { MainFooter } from './styles'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const appName = import.meta.env.VITE_APP_NAME

  return (
    <MainFooter>
      <ul>
        <li>
          &copy; {currentYear} - {appName}. Developed by{' '}
          <a href="https://rodrigofontes.dev" target="_blank">
            Rodrigo Fontes
          </a>
        </li>

        <li>
          <a href="#" target="_blank">
            Política de privacidade
          </a>
        </li>

        <li>
          <a href="#" target="_blank">
            Termos de uso
          </a>
        </li>
      </ul>
    </MainFooter>
  )
}
