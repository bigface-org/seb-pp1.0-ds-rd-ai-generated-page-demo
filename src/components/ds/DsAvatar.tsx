import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { User } from 'lucide-react'

const wrapperVariants = cva(
  'inline-flex items-center justify-center rounded-full overflow-hidden',
  {
    variants: {
      size: {
        32: 'w-8 h-8',
        36: 'w-9 h-9',
        40: 'w-10 h-10',
        44: 'w-11 h-11',
        48: 'w-12 h-12',
        52: 'w-[52px] h-[52px]',
        56: 'w-14 h-14',
      },
    },
    defaultVariants: { size: 40 },
  },
)

const textVariants = cva(
  'w-full text-center font-bold text-neutral-0',
  {
    variants: {
      size: {
        32: 'text-base',
        36: 'text-base',
        40: 'text-xl',
        44: 'text-xl',
        48: 'text-2xl',
        52: 'text-2xl',
        56: 'text-2xl',
      },
    },
    defaultVariants: { size: 40 },
  },
)

const AVATAR_COLORS = [
  'bg-primary-5',
  'bg-success-5',
  'bg-warning-5',
  'bg-danger-5',
  'bg-indigo-5',
]

export interface DsAvatarProps extends VariantProps<typeof wrapperVariants> {
  src?: string
  name?: string
  className?: string
}

const DsAvatar: React.FC<DsAvatarProps> = ({ src, name, size, className }) => {
  const initial = name ? name.charAt(0).toUpperCase() : undefined
  const colorIndex = name ? name.charCodeAt(0) % AVATAR_COLORS.length : 0

  if (src) {
    return (
      <span className={cn(wrapperVariants({ size }), className)}>
        <img src={src} alt={name || 'avatar'} className="w-full h-full object-cover" />
      </span>
    )
  }

  if (initial) {
    return (
      <span className={cn(wrapperVariants({ size }), AVATAR_COLORS[colorIndex], className)}>
        <span className={textVariants({ size })}>{initial}</span>
      </span>
    )
  }

  return (
    <span className={cn(wrapperVariants({ size }), 'bg-neutral-4', className)}>
      <User className="text-neutral-6 w-1/2 h-1/2" />
    </span>
  )
}

export { DsAvatar }
