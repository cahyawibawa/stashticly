import * as React from 'react'
import { format } from 'date-fns'
import { type SelectSingleEventHandler } from 'react-day-picker'
import { Popover, PopoverContent } from './ui/popover'
import { PopoverTrigger } from '@radix-ui/react-popover'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { Icons } from './icons'
import { Calendar } from './ui/calendar'


type Props = {
  value?: Date
  onChange?: SelectSingleEventHandler
  disabled?: boolean
}

export const DatePicker = ({
  value,
  onChange,
  disabled
}: Props) =>{
  return (
    <Popover>
    <PopoverTrigger asChild>
      <Button
      disabled={disabled}
      variant="outline"
      className={cn(
        'w-full justify-start text-left font-normal',
        !value && 'text-muted-foreground',
      )}
      >
        <Icons.calendar className="mr-2 size-4" />
        {value ? format(value, "PPP") : <span>Pick a date</span>}
      </Button>
    </PopoverTrigger>
    <PopoverContent>
      <Calendar
      mode="single"
      selected={value}
      onSelect={onChange}
      disabled={disabled}
      initialFocus
      />
    </PopoverContent>
  </Popover>

  )
 
}