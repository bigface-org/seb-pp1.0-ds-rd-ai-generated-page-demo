import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@/lib/utils'

export const dsButtonVariants = cva(
  [
    'box-border inline-flex items-center justify-center gap-1',
    'cursor-pointer font-medium border border-solid',
    'transition-colors',
    'disabled:opacity-[0.48] disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        solid: '',
        outline: 'bg-neutral-0',
        flat: 'border-transparent bg-transparent',
      },
      level: {
        primary: '',
        success: '',
        warning: '',
        danger: '',
        neutral: '',
        tertiary: '',
        dark: '',
        ghost: '',
        momo: '',
      },
      size: {
        small: 'text-sm leading-5 py-[5px] px-4',
        medium: 'text-base leading-6 py-[7px] px-5',
        large: 'text-base leading-6 py-[11px] px-6',
        response: 'text-base leading-6 py-[11px] px-6 lg:py-[7px] lg:px-5',
      },
      shape: {
        rounded: 'rounded',
        pill: 'rounded-[100px]',
      },
    },
    compoundVariants: [
      // SOLID
      { variant: 'solid', level: 'primary', className: 'text-neutral-0 bg-primary-5 border-primary-5 enabled:hover:bg-primary-6 enabled:hover:border-primary-6 enabled:active:bg-primary-7 enabled:active:border-primary-7' },
      { variant: 'solid', level: 'success', className: 'text-neutral-0 bg-success-5 border-success-5 enabled:hover:bg-success-6 enabled:hover:border-success-6 enabled:active:bg-success-7 enabled:active:border-success-7' },
      { variant: 'solid', level: 'warning', className: 'text-neutral-0 bg-warning-5 border-warning-5 enabled:hover:bg-warning-6 enabled:hover:border-warning-6 enabled:active:bg-warning-7 enabled:active:border-warning-7' },
      { variant: 'solid', level: 'danger', className: 'text-neutral-0 bg-danger-5 border-danger-5 enabled:hover:bg-danger-6 enabled:hover:border-danger-6 enabled:active:bg-danger-7 enabled:active:border-danger-7' },
      { variant: 'solid', level: 'neutral', className: 'text-neutral-0 bg-neutral-5 border-neutral-5 enabled:hover:bg-neutral-6 enabled:hover:border-neutral-6 enabled:active:bg-neutral-7 enabled:active:border-neutral-7' },
      { variant: 'solid', level: 'tertiary', className: 'text-neutral-7 bg-neutral-0 border-neutral-0 enabled:hover:bg-neutral-2 enabled:hover:border-neutral-2 enabled:active:bg-neutral-3 enabled:active:border-neutral-3' },
      { variant: 'solid', level: 'ghost', className: 'text-neutral-0 border-transparent enabled:hover:bg-[#00000016] enabled:active:bg-[#00000032]' },
      { variant: 'solid', level: 'momo', className: 'text-neutral-0 bg-momo-0 border-momo-0 enabled:hover:bg-momo-1 enabled:hover:border-momo-1 enabled:active:bg-momo-2 enabled:active:border-momo-2' },
      // OUTLINE
      { variant: 'outline', level: 'primary', className: 'text-primary-5 border-primary-5 enabled:hover:bg-primary-0 enabled:active:bg-primary-1' },
      { variant: 'outline', level: 'success', className: 'text-success-6 border-success-6 enabled:hover:bg-success-0 enabled:active:bg-success-1' },
      { variant: 'outline', level: 'warning', className: 'text-warning-6 border-warning-6 enabled:hover:bg-warning-0 enabled:active:bg-warning-1' },
      { variant: 'outline', level: 'danger', className: 'text-danger-5 border-danger-5 enabled:hover:bg-danger-0 enabled:active:bg-danger-1' },
      { variant: 'outline', level: 'neutral', className: 'text-neutral-7 border-neutral-5 enabled:hover:bg-neutral-2 enabled:active:bg-neutral-3' },
      { variant: 'outline', level: 'dark', className: 'text-neutral-0 border-neutral-0 bg-primary-9 enabled:hover:bg-primary-9 enabled:active:bg-primary-8' },
      // FLAT
      { variant: 'flat', level: 'primary', className: 'rounded text-primary-5 enabled:hover:text-primary-6 enabled:active:text-primary-7' },
      { variant: 'flat', level: 'success', className: 'rounded text-success-5 enabled:hover:text-success-6 enabled:active:text-success-7' },
      { variant: 'flat', level: 'warning', className: 'rounded text-warning-5 enabled:hover:text-warning-6 enabled:active:text-warning-7' },
      { variant: 'flat', level: 'danger', className: 'rounded text-danger-5 enabled:hover:text-danger-6 enabled:active:text-danger-7' },
      { variant: 'flat', level: 'neutral', className: 'rounded text-neutral-7 enabled:hover:text-neutral-8 enabled:active:text-neutral-9' },
    ],
    defaultVariants: {
      variant: 'solid',
      level: 'primary',
      size: 'small',
      shape: 'rounded',
    },
  },
)

export interface DsButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof dsButtonVariants> {}

const DsButton = React.forwardRef<HTMLButtonElement, DsButtonProps>(
  ({ className, variant, level, size, shape, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(dsButtonVariants({ variant, level, size, shape }), className)}
      {...props}
    />
  ),
)
DsButton.displayName = 'DsButton'

export { DsButton }
