import { MainFooter } from './styles'

const currentYear = new Date().getFullYear()
const appName = import.meta.env.VITE_APP_NAME

export function Footer() {
  return (
    <MainFooter>
      <p>
        &copy; {currentYear} - {appName}.
      </p>

      <a
        href="#"
        target="_blank"
      >
        Política de privacidade
      </a>

      <a
        href="#"
        target="_blank"
      >
        Termos de uso
      </a>
    </MainFooter>
  )
}
