import { cn } from '@/lib'
import { ComponentProps, forwardRef } from 'react'

const Title = forwardRef<HTMLHeadingElement, ComponentProps<'h1'>>(
  ({ children, className }, ref) => (
    <h1 ref={ref} className={cn(className, 'text-4xl font-bold')}>
      {children}
    </h1>
  ),
)

Title.displayName = 'Title'

const Description = forwardRef<HTMLHeadingElement, ComponentProps<'h2'>>(
  ({ children, className }, ref) => (
    <h2 ref={ref} className={cn(className, 'text-3xl')}>
      {children}
    </h2>
  ),
)

Description.displayName = 'Description'

export { Description, Title }
