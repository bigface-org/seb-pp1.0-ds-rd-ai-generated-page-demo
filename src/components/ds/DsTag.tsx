import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@/lib/utils'

export const tagVariants = cva(
  'inline-block border border-solid rounded',
  {
    variants: {
      styleType: {
        solid: '',
        outline: '',
      },
      type: {
        primary: '',
        success: '',
        warning: '',
        danger: '',
        neutral: '',
      },
      size: {
        small: 'p-1 text-xs leading-4',
        medium: 'p-1 text-sm leading-5',
        large: 'py-1 px-2 text-base leading-6',
      },
    },
    compoundVariants: [
      { styleType: 'solid', type: 'primary', className: 'bg-primary-7 border-primary-7 text-neutral-0' },
      { styleType: 'solid', type: 'success', className: 'bg-success-0 border-success-0 text-success-5' },
      { styleType: 'solid', type: 'warning', className: 'bg-warning-0 border-warning-0 text-warning-5' },
      { styleType: 'solid', type: 'danger', className: 'bg-danger-5 border-danger-5 text-neutral-0' },
      { styleType: 'solid', type: 'neutral', className: 'bg-neutral-9 border-neutral-9 text-neutral-0' },
      { styleType: 'outline', type: 'primary', className: 'bg-primary-0 border-primary-5/16 text-primary-5' },
      { styleType: 'outline', type: 'success', className: 'bg-success-0 border-success-5/16 text-success-5' },
      { styleType: 'outline', type: 'warning', className: 'bg-warning-0 border-warning-5/16 text-warning-6' },
      { styleType: 'outline', type: 'danger', className: 'bg-danger-0 border-danger-5/16 text-danger-5' },
      { styleType: 'outline', type: 'neutral', className: 'bg-neutral-2 border-neutral-5/16 text-neutral-7' },
    ],
    defaultVariants: {
      styleType: 'solid',
      type: 'primary',
      size: 'medium',
    },
  },
)

export interface DsTagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {}

const DsTag = React.forwardRef<HTMLSpanElement, DsTagProps>(
  ({ className, styleType, type, size, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(tagVariants({ styleType, type, size }), className)}
      {...props}
    />
  ),
)
DsTag.displayName = 'DsTag'

export { DsTag }
