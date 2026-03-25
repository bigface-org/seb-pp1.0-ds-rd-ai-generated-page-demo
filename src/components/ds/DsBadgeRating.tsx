import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@/lib/utils'

const scoreVariants = cva(
  'bg-primary-5 text-neutral-0 rounded px-1 font-normal',
  {
    variants: {
      size: {
        small: 'text-xs leading-4',
        medium: 'text-sm leading-5',
        large: 'text-base leading-6',
      },
    },
    defaultVariants: { size: 'medium' },
  },
)

const textVariants = cva(
  'ml-1 whitespace-nowrap text-primary-5',
  {
    variants: {
      size: {
        small: 'text-xs leading-4',
        medium: 'text-sm leading-5',
        large: 'text-base leading-6',
      },
    },
    defaultVariants: { size: 'medium' },
  },
)

const totalVariants = cva(
  'ml-0.5 text-neutral-6',
  {
    variants: {
      size: {
        small: 'text-xs leading-4',
        medium: 'text-sm leading-5',
        large: 'text-base leading-6',
      },
    },
    defaultVariants: { size: 'medium' },
  },
)

function getGradeText(score: number): string {
  if (score >= 4.5) return '太棒了'
  if (score >= 4.0) return '很好'
  if (score >= 3.0) return '不錯'
  if (score >= 2.0) return '尚可'
  return '待改善'
}

export interface DsBadgeRatingProps extends VariantProps<typeof scoreVariants> {
  score: number
  total?: number
  className?: string
}

const DsBadgeRating: React.FC<DsBadgeRatingProps> = ({ score, total = 5, size, className }) => {
  return (
    <span className={cn('inline-flex items-center', className)}>
      <span className={scoreVariants({ size })}>{score.toFixed(1)}</span>
      <span className={textVariants({ size })}>{getGradeText(score)}</span>
      <span className={totalVariants({ size })}>/ {total}</span>
    </span>
  )
}

export { DsBadgeRating }
