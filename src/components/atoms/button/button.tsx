import { cn } from '@/lib'
import { ComponentProps, forwardRef } from 'react'

const Button = forwardRef<HTMLButtonElement, ComponentProps<'button'>>(
  ({ className, ...props }, ref) => {
    return <button ref={ref} className={cn(className, '')} {...props} />
  },
)

Button.displayName = 'Button'

export { Button }
