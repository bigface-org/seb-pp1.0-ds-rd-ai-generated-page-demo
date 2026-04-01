import type { VariantProps } from 'class-variance-authority'
import type { dsButtonVariants } from '@/components/ds/DsButton'

export type Tab = {
  label: string
  id: string
  url?: string
}

export type TabLevel = 'main' | 'sub'

export type RenderTabParams = {
  tab: Tab
  isActive: boolean
  onClick: () => void
  ref: (element: HTMLButtonElement | null) => void
}

export type TabChangeHandler = (tab: Tab) => void

export type RenderArrowButtonParams = Pick<
  VariantProps<typeof dsButtonVariants>,
  'variant' | 'size' | 'level'
> & {
  buttonType: TabLevel
  onClick: () => void
  isVisible: boolean
}
