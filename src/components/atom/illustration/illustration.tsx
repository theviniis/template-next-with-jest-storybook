import { cn } from '@/lib'
import Image, { ImageProps } from 'next/image'
import { forwardRef } from 'react'

export interface IllustrationProps extends ImageProps {}

const Illustration = forwardRef<HTMLImageElement, IllustrationProps>(
  ({ className, ...props }, ref) => {
    return <Image ref={ref} className={cn(className)} {...props} />
  },
)

Illustration.displayName = 'Illustration'

export { Illustration }
