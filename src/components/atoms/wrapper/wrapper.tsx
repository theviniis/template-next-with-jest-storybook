import { cn } from '@/lib'
import { ComponentProps, forwardRef } from 'react'

const Wrapper = forwardRef<HTMLElement, ComponentProps<'main'>>(
  ({ className, ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={cn(
          className,
          'flex h-dvh w-full flex-col items-center justify-center bg-background p-12 text-center text-foreground',
        )}
        {...props}
      />
    )
  },
)

Wrapper.displayName = 'Wrapper'

export { Wrapper }
