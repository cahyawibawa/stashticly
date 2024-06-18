import { cn, formatCurrency, formatPercentage } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import { type IconType } from 'react-icons/lib'
import { CountUp } from './count-up'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Skeleton } from './ui/skeleton'

const boxVariant = cva('shrink-0 rounded-md p-3', {
  variants: {
    variant: {
      default: 'bg-blue-500/20',
      secondary: 'bg-emerald-500/20',
      danger: 'bg-rose-500/20',
      warning: 'bg-yellow-500/20',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const iconVariant = cva('size-6', {
  variants: {
    variant: {
      default: 'fill-blue-500',
      secondary: 'fill-emerald-500',
      danger: 'fill-rose-500',
      warning: 'fill-yellow-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

type boxVariants = VariantProps<typeof boxVariant>
type iconVariants = VariantProps<typeof iconVariant>

interface DataCardProps extends boxVariants, iconVariants {
  title: string
  value?: number
  percentageChange?: number
  icon: IconType
  dateRange: string
}

export default function DataCard({
  icon: Icon,
  title,
  value = 0,
  percentageChange = 0,
  dateRange,
  variant,
}: DataCardProps) {
  return (
    <Card className="border-none drop-shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between gap-x-4">
        <div className="space-y-2">
          <CardTitle className="line-clamp-1 text-2xl">{title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {dateRange}
          </CardDescription>
        </div>
        <div className={cn(boxVariant({ variant }))}>
          <Icon className={cn(iconVariant({ variant }))} />
        </div>
      </CardHeader>
      <CardContent>
        <h1 className="mb-2 line-clamp-1 break-all text-2xl font-bold">
          <CountUp
            preserveValue
            start={0}
            end={value}
            decimals={2}
            decimalPlaces={2}
            formattingFn={formatCurrency}
          />
        </h1>
        {/* //!FIX percentage issue */}
        {/* <p
          className={cn(
            'line-clamp-1 text-sm text-muted-foreground',
            percentageChange > 0 && 'text-emerald-500',
            percentageChange < 0 && 'text-rose-500'
          )}
        >
          {formatPercentage(percentageChange, { addPrefix: true })} from last
          period
        </p> */}
      </CardContent>
    </Card>
  )
}

export const DataCardLoading = () => {
  return (
    <Card className="h-[192px] border-none drop-shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between gap-x-4">
        <div className="space-y-2">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-4 w-40" />
        </div>
        <Skeleton className="size-12" />
      </CardHeader>
      <CardContent>
        <Skeleton className="mb-2 h-10 w-24 shrink-0" />
        <Skeleton className="h-4 w-40 shrink-0" />
      </CardContent>
    </Card>
  )
}
