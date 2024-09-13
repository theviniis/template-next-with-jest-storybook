import { cn } from '@/lib'
import Image, { ImageProps } from 'next/image'
import { forwardRef } from 'react'

export interface LogoProps extends ImageProps {}

const Logo = forwardRef<HTMLImageElement, LogoProps>(
  ({ className, ...props }, ref) => {
    return <Image ref={ref} className={cn(className, 'w-96')} {...props} />
  },
)

Logo.displayName = 'Logo'

export { Logo }
