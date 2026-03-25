import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@/lib/utils'

const overlayVariants = cva(
  'fixed inset-0',
  {
    variants: {
      isTransparent: {
        true: 'bg-transparent',
        false: 'bg-[#000000cc]',
      },
    },
    defaultVariants: { isTransparent: false },
  },
)

export interface DsOverlayProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof overlayVariants> {}

const DsOverlay = React.forwardRef<HTMLDivElement, DsOverlayProps>(
  ({ className, isTransparent, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(overlayVariants({ isTransparent }), className)}
      {...props}
    />
  ),
)
DsOverlay.displayName = 'DsOverlay'

export { DsOverlay }
