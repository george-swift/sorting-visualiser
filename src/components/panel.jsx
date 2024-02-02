import { cn } from '@/utils'

export const Panel = ({ className, children, ...props }) => (
  <div className={cn('h-[486px] md:h-[686px]', className)} {...props}>
    {children}
  </div>
)

Panel.Title = ({ className, children, ...props }) => (
  <div
    className={cn(
      'bg-zinc-50 text-sm px-2 py-1 rounded-t-md flex items-center gap-x-1.5',
      className
    )}
    {...props}
  >
    {children}
  </div>
)

Panel.Body = ({ className, children, ...props }) => (
  <div
    className={cn('h-[calc(100%_-_28px)] overflow-auto', className)}
    {...props}
  >
    {children}
  </div>
)
