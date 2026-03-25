import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@/lib/utils'

export const badgeDotVariants = cva(
  'relative inline-block text-xs font-normal text-center leading-4 rounded-lg break-keep z-[1]',
  {
    variants: {
      level: {
        primary: 'text-neutral-0 bg-primary-7',
        danger: 'text-neutral-0 bg-danger-5',
        neutral: 'text-primary-9 bg-neutral-0',
      },
      hasContent: {
        true: 'min-w-[8px] px-1',
        false: 'min-w-[6px] min-h-[6px] shadow-[0_0_0_1px_hsl(var(--neutral-0))]',
      },
    },
    compoundVariants: [
      { level: 'neutral', hasContent: true, className: 'shadow-none' },
    ],
    defaultVariants: {
      level: 'primary',
      hasContent: false,
    },
  },
)

export interface DsBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeDotVariants> {
  count?: number
}

const DsBadge = React.forwardRef<HTMLSpanElement, DsBadgeProps>(
  ({ className, level, count, ...props }, ref) => {
    const hasContent = count !== undefined && count > 0
    return (
      <span
        ref={ref}
        className={cn(badgeDotVariants({ level, hasContent }), className)}
        {...props}
      >
        {hasContent ? (count > 99 ? '99+' : count) : null}
      </span>
    )
  },
)
DsBadge.displayName = 'DsBadge'

export { DsBadge }
