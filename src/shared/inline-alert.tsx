import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

export const alertVariants = cva('rounded-md p-4 text-sm', {
  variants: {
    variant: {
      info: 'bg-brand-softer text-fg-brand-strong',
      danger: 'bg-rose-50 text-rose-900 dark:bg-rose-950 dark:text-rose-300',
      success: 'bg-success-soft text-fg-success-strong',
      warning: 'bg-warning-soft text-fg-warning',
      neutral: 'bg-neutral-secondary-medium text-heading',
    },
  },
  defaultVariants: {
    variant: 'info',
  },
})

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {}

export function AlertInline({ className, variant, ...props }: AlertProps) {
  return <div role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
}
