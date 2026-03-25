import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { Info, AlertTriangle, CheckCircle, X } from 'lucide-react'

const blockVariants = cva(
  'border border-solid p-4 flex flex-nowrap box-border',
  {
    variants: {
      type: {
        primary: 'bg-primary-0 border-primary-5/16',
        warning: 'bg-warning-0 border-warning-5/16',
        success: 'bg-success-0 border-success-5/16',
      },
      rounded: {
        true: 'rounded',
        false: 'rounded-none',
      },
    },
    defaultVariants: { type: 'primary', rounded: false },
  },
)

const iconVariants = cva(
  'h-6 w-6 mr-2 flex-none',
  {
    variants: {
      type: {
        primary: 'text-primary-5',
        warning: 'text-warning-5',
        success: 'text-success-5',
      },
    },
    defaultVariants: { type: 'primary' },
  },
)

const ICONS = {
  primary: Info,
  warning: AlertTriangle,
  success: CheckCircle,
} as const

export interface DsAnnouncementProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'type'>,
    VariantProps<typeof blockVariants> {
  type?: 'primary' | 'warning' | 'success'
  title?: string
  closable?: boolean
  onClose?: () => void
}

const DsAnnouncement: React.FC<DsAnnouncementProps> = ({
  className,
  type = 'primary',
  rounded,
  title,
  closable,
  onClose,
  children,
  ...props
}) => {
  const Icon = ICONS[type]
  return (
    <div className={cn(blockVariants({ type, rounded }), className)} {...props}>
      <Icon className={iconVariants({ type })} />
      <div className="flex-1 min-w-0">
        {title && <div className="font-bold text-sm leading-5 text-neutral-8">{title}</div>}
        <div className="text-sm leading-5 text-neutral-7">{children}</div>
      </div>
      {closable && (
        <button onClick={onClose} className="ml-2 flex-none text-neutral-6 hover:text-neutral-8">
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}

export { DsAnnouncement }
