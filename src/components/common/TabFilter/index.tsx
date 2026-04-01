import type { ReactNode, UIEvent } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useDebounce } from '@/hooks/useDebounce'
import type {
  RenderArrowButtonParams,
  RenderTabParams,
  Tab as TabType,
  TabChangeHandler,
  TabLevel,
} from './types'

type Props = {
  type: TabLevel
  tabs: TabType[]
  activeTab: string
  align?: 'center' | 'left'
  hasOuter?: boolean
  searchBarOffset?: string
  zIndex?: number
  showControlButtons?: boolean
  onTabChange: TabChangeHandler
  renderTab?: (params: RenderTabParams) => ReactNode
  renderRightArrow?: (params: RenderArrowButtonParams) => ReactNode
  renderLeftArrow?: (params: RenderArrowButtonParams) => ReactNode
}

const TabFilter = ({
  type,
  tabs,
  activeTab,
  align,
  hasOuter = false,
  searchBarOffset,
  zIndex,
  showControlButtons = true,
  onTabChange,
  renderTab,
  renderRightArrow,
  renderLeftArrow,
}: Props) => {
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const sliderPositionRef = useRef<number | null>(0)
  const itemElements = useRef<{ [key: string]: HTMLButtonElement | null }>({})
  const [showNext, setShowNext] = useState(false)
  const [showPrev, setShowPrev] = useState(false)

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1
    setShowNext(!isAtEnd)
    setShowPrev(scrollLeft > 0)
    sliderPositionRef.current = scrollLeft
  }

  const findScrollPosition = (direction: 'next' | 'prev') => {
    if (!sliderRef.current || sliderPositionRef.current === null) return null

    const children = Array.from(sliderRef.current.children) as HTMLElement[]
    const currentPosition = sliderPositionRef.current
    const paddingLeft = children[0]?.offsetLeft || 0
    const sortedChildren = direction === 'prev' ? [...children].reverse() : children

    const target = sortedChildren.find((el) => {
      const left = el.offsetLeft - paddingLeft
      return direction === 'next' ? left > currentPosition : left < currentPosition
    })

    return target ? target.offsetLeft - paddingLeft : 0
  }

  const onNextClick = () => {
    const nextPosition = findScrollPosition('next')
    if (nextPosition === null || sliderRef.current === null) return
    sliderRef.current.scrollLeft = nextPosition
  }

  const onPrevClick = () => {
    const prevPosition = findScrollPosition('prev')
    if (prevPosition === null || sliderRef.current === null) return
    sliderRef.current.scrollLeft = prevPosition
  }

  const handleResize = useCallback(() => {
    if (!sliderRef.current) return
    setShowNext(sliderRef.current.scrollWidth > sliderRef.current.clientWidth)
    setShowPrev(sliderRef.current.scrollLeft > 0)
  }, [])

  const debouncedResize = useDebounce(handleResize, 300)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return
    setShowNext(slider.scrollWidth > slider.clientWidth)
    setShowPrev(slider.scrollLeft > 0)
  }, [tabs])

  useEffect(() => {
    window.addEventListener('resize', debouncedResize)
    return () => window.removeEventListener('resize', debouncedResize)
  }, [debouncedResize])

  useEffect(() => {
    setTimeout(() => {
      if (!activeTab || !sliderRef.current || !itemElements.current[activeTab]) return
      sliderRef.current.scrollTo({
        left: itemElements.current[activeTab].offsetLeft - 16,
        behavior: 'smooth',
      })
    }, 300)
  }, [activeTab])

  const commonArrowProps = {
    buttonType: type,
    variant: 'outline' as const,
    size: 'large' as const,
    level: 'neutral' as const,
  }

  const renderLeftArrowButton = () => {
    if (!showControlButtons || !showPrev) return null

    if (renderLeftArrow) {
      return renderLeftArrow({ ...commonArrowProps, onClick: onPrevClick, isVisible: showPrev })
    }

    return (
      <button
        onClick={onPrevClick}
        aria-label="Scroll left"
        className={cn(
          'absolute z-10 flex items-center justify-center lg:hidden',
          type === 'main'
            ? 'left-0 top-0 bottom-0 w-12 bg-primary-9 text-neutral-0 hover:bg-primary-8 active:bg-primary-7'
            : 'left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-neutral-5 bg-neutral-0 text-neutral-7 shadow-03 hover:bg-neutral-2 active:bg-neutral-3',
        )}
      >
        <ChevronLeft size={24} />
      </button>
    )
  }

  const renderRightArrowButton = () => {
    if (!showControlButtons || !showNext) return null

    if (renderRightArrow) {
      return renderRightArrow({ ...commonArrowProps, onClick: onNextClick, isVisible: showNext })
    }

    return (
      <button
        onClick={onNextClick}
        aria-label="Scroll right"
        className={cn(
          'absolute z-10 flex items-center justify-center lg:hidden',
          type === 'main'
            ? 'right-0 top-0 bottom-0 w-12 bg-primary-9 text-neutral-0 hover:bg-primary-8 active:bg-primary-7'
            : 'right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-neutral-5 bg-neutral-0 text-neutral-7 shadow-03 hover:bg-neutral-2 active:bg-neutral-3',
        )}
      >
        <ChevronRight size={24} />
      </button>
    )
  }

  const filterContent = (
    <div
      className={cn(
        'w-full relative max-w-[1216px]',
        align === 'left' ? 'ml-0' : 'mx-auto',
      )}
    >
      {renderLeftArrowButton()}
      <div
        ref={sliderRef}
        onScroll={onScroll}
        className={cn(
          'flex scroll-smooth no-scrollbar',
          type === 'main'
            ? 'flex-nowrap overflow-x-auto'
            : 'flex-nowrap overflow-x-auto lg:flex-wrap lg:overflow-visible',
        )}
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab
          const onClick = () => onTabChange(tab)
          const ref = (element: HTMLButtonElement | null) => {
            itemElements.current[tab.id] = element
          }

          if (renderTab) {
            return renderTab({ tab, isActive, onClick, ref })
          }

          return (
            <button
              key={tab.id}
              ref={ref}
              onClick={onClick}
              className={cn(
                'text-ds-2 font-medium whitespace-nowrap flex-shrink-0 transition-colors',
                type === 'main'
                  ? cn(
                      'px-6 py-3',
                      isActive
                        ? 'bg-primary-5 text-neutral-0'
                        : 'bg-primary-9 text-neutral-3 hover:text-neutral-0',
                    )
                  : cn(
                      'px-5 py-[7px] rounded-full border border-primary-5 mb-2',
                      '[&:not(:first-child)]:ml-2 first:ml-4 md:first:ml-8 lg:first:ml-0',
                      isActive
                        ? 'bg-primary-5 text-neutral-0 hover:bg-primary-6 active:bg-primary-7'
                        : 'bg-neutral-0 text-primary-5 hover:bg-primary-0 active:bg-primary-1',
                    ),
              )}
            >
              {tab.label}
            </button>
          )
        })}
        <div className="w-4 md:w-12 lg:hidden opacity-0 shrink-0 grow-0" />
      </div>
      {renderRightArrowButton()}
    </div>
  )

  if (!hasOuter) return filterContent

  return (
    <div
      className={cn(
        type === 'main'
          ? 'sticky w-full bg-primary-9 shadow-navigation box-border'
          : 'pt-5 md:pt-6',
      )}
      style={{
        top: type === 'main' ? (searchBarOffset ?? 0) : undefined,
        zIndex: type === 'main' ? (zIndex ?? 2) : undefined,
      }}
    >
      {filterContent}
    </div>
  )
}

export default TabFilter
