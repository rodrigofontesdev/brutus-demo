import { TitleWithSeparator } from '../../atoms/TitleWithSeparator'
import { TimelineStyle } from './styles'

export function Timeline() {
  return (
    <TimelineStyle>
      <TitleWithSeparator orientation="vertical" size={60} separator="right">
        <h3>2024</h3>
      </TitleWithSeparator>
      <span>R$ 81.000,00</span>

      <TitleWithSeparator orientation="vertical" size={60}>
        <h3>2023</h3>
      </TitleWithSeparator>
      <span>R$ 81.000,00</span>

      <TitleWithSeparator orientation="vertical" size={60}>
        <h3>2022</h3>
      </TitleWithSeparator>
      <span>R$ 81.000,00</span>

      <TitleWithSeparator orientation="vertical" size={60}>
        <h3>2021</h3>
      </TitleWithSeparator>
      <span>R$ 81.000,00</span>

      <TitleWithSeparator orientation="vertical" size={60}>
        <h3>2020</h3>
      </TitleWithSeparator>
      <span>R$ 81.000,00</span>

      <TitleWithSeparator orientation="vertical" size={60}>
        <h3>2019</h3>
      </TitleWithSeparator>
      <span>R$ 81.000,00</span>

      <TitleWithSeparator orientation="vertical" size={60}>
        <h3>2018</h3>
      </TitleWithSeparator>
      <span>R$ 81.000,00</span>
    </TimelineStyle>
  )
}
