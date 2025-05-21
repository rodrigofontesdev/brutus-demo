import { Steps } from '@components/atoms/Steps'
import { useViewport } from '@hooks/useViewport'
import { Fragment } from 'react/jsx-runtime'
import { ProgressStyle } from './styles'

export function Progress() {
  const { checkViewport } = useViewport()

  return checkViewport('mobile') || checkViewport('tablet') ? (
    <ProgressStyle>
      <Steps.Root>
        <Steps.Step active={true} />
        <Steps.Step active={false} />
        <Steps.Step active={false} />
      </Steps.Root>
    </ProgressStyle>
  ) : (
    <Fragment />
  )
}
