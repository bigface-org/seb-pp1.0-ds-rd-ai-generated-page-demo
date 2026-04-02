import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@/lib/utils'

export const navBarItemVariants = cva(
  'text-ds-2 font-medium whitespace-nowrap flex-shrink-0 transition-colors px-6 py-3',
  {
    variants: {
      active: {
        true: 'bg-primary-5 text-neutral-0',
        false: 'bg-primary-9 text-neutral-3 hover:text-neutral-0',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
)

export const navBarArrowVariants = cva(
  'absolute z-10 flex items-center justify-center lg:hidden top-0 bottom-0 w-12 bg-primary-9 text-neutral-0 hover:bg-primary-8 active:bg-primary-7',
  {
    variants: {
      direction: {
        left: 'left-0',
        right: 'right-0',
      },
    },
  },
)

export interface DsNavBarProps extends React.HTMLAttributes<HTMLDivElement> {
  top?: number | string
  zIndex?: number
}

export interface DsNavBarItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof navBarItemVariants> {}

export interface DsNavBarArrowProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof navBarArrowVariants> {}

const DsNavBar = React.forwardRef<HTMLDivElement, DsNavBarProps>(
  ({ className, style, top, zIndex, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('sticky w-full bg-primary-9 shadow-navigation box-border', className)}
      style={{ top, zIndex, ...style }}
      {...props}
    >
      {children}
    </div>
  ),
)
DsNavBar.displayName = 'DsNavBar'

const DsNavBarItem = React.forwardRef<HTMLButtonElement, DsNavBarItemProps>(
  ({ className, active, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(navBarItemVariants({ active }), className)}
      {...props}
    />
  ),
)
DsNavBarItem.displayName = 'DsNavBarItem'

const DsNavBarArrow = React.forwardRef<HTMLButtonElement, DsNavBarArrowProps>(
  ({ className, direction, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(navBarArrowVariants({ direction }), className)}
      {...props}
    />
  ),
)
DsNavBarArrow.displayName = 'DsNavBarArrow'

export { DsNavBar, DsNavBarItem, DsNavBarArrow }
