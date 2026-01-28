import { SkeletonStyle } from './styles'

type SkeletonProps = {
  width?: number
  height?: number
  radii?: number
}

export function Skeleton({ width, height, radii }: SkeletonProps) {
  return (
    <SkeletonStyle
      $width={width}
      $height={height}
      $radii={radii}
    />
  )
}
