import { TitleWithSeparator } from '../../atoms/TitleWithSeparator'
import { TimelineStyle } from './styles'

export function Timeline() {
  return (
    <TimelineStyle>
      <TitleWithSeparator orientation="vertical" size={60} separator="right">
        <h2>2024</h2>
      </TitleWithSeparator>
      <span>R$ 81.000,00</span>

      <TitleWithSeparator orientation="vertical" size={60}>
        <h2>2023</h2>
      </TitleWithSeparator>
      <span>R$ 81.000,00</span>

      <TitleWithSeparator orientation="vertical" size={60}>
        <h2>2022</h2>
      </TitleWithSeparator>
      <span>R$ 81.000,00</span>

      <TitleWithSeparator orientation="vertical" size={60}>
        <h2>2021</h2>
      </TitleWithSeparator>
      <span>R$ 81.000,00</span>

      <TitleWithSeparator orientation="vertical" size={60}>
        <h2>2020</h2>
      </TitleWithSeparator>
      <span>R$ 81.000,00</span>

      <TitleWithSeparator orientation="vertical" size={60}>
        <h2>2019</h2>
      </TitleWithSeparator>
      <span>R$ 81.000,00</span>

      <TitleWithSeparator orientation="vertical" size={60}>
        <h2>2018</h2>
      </TitleWithSeparator>
      <span>R$ 81.000,00</span>
    </TimelineStyle>
  )
}
