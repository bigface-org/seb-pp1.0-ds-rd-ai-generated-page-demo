import * as React from 'react'
import { cn } from '@/lib/utils'

export interface DsTooltipProps {
  content: string
  placement?: 'top' | 'bottom'
  children: React.ReactNode
  className?: string
}

const DsTooltip: React.FC<DsTooltipProps> = ({ content, placement = 'bottom', children, className }) => {
  return (
    <span className={cn('relative inline-flex group', className)}>
      {children}
      <span
        className={cn(
          'absolute left-1/2 -translate-x-1/2 z-dropdown',
          'p-1 rounded text-xs leading-4 bg-[#000000cc] text-neutral-0 min-w-6 max-w-[360px] whitespace-nowrap',
          'opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none',
          placement === 'top' ? 'bottom-full mb-1' : 'top-full mt-1',
        )}
      >
        {content}
      </span>
    </span>
  )
}

export { DsTooltip }
