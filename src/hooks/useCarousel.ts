import { useEffect, useRef, useState } from 'react'

type UseCarouselProps = {
  steps: number
}

export function useCarousel({ steps }: UseCarouselProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isScrollingRef = useRef(false)
  const isDraggingRef = useRef(false)
  const startXRef = useRef(0)
  const scrollLeftRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current

    if (!container) return

    const handleScroll = () => {
      if (isScrollingRef.current) return

      const containerRect = container.getBoundingClientRect()
      const containerCenter = containerRect.left + containerRect.width / 2
      const children = Array.from(container.children)

      let closestIndex = 0
      let closestDistance = Infinity

      children.forEach((child, index) => {
        const childRect = child.getBoundingClientRect()
        const childCenter = childRect.left + childRect.width / 2
        const distance = Math.abs(containerCenter - childCenter)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setCurrentStep(closestIndex)
    }

    const handleScrollEnd = () => handleScroll()

    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true
      startXRef.current = e.pageX - container.offsetLeft
      scrollLeftRef.current = container.scrollLeft
      container.style.userSelect = 'none'
    }

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault()

      if (!isDraggingRef.current) return

      const x = e.pageX - container.offsetLeft
      const walk = (x - startXRef.current) * 1.5
      container.scrollLeft = scrollLeftRef.current - walk
    }

    const handleMouseUp = () => {
      isDraggingRef.current = false
      container.style.userSelect = ''
    }

    const handleMouseLeave = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false
        container.style.userSelect = ''
      }
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    container.addEventListener('scrollend', handleScrollEnd, { passive: true })
    container.addEventListener('mousedown', handleMouseDown)
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseup', handleMouseUp)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      container.removeEventListener('scroll', handleScroll)
      container.removeEventListener('scrollend', handleScrollEnd)
      container.removeEventListener('mousedown', handleMouseDown)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseup', handleMouseUp)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [steps])

  return {
    currentStep,
    containerRef,
  }
}
