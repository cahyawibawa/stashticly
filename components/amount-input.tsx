import CurrencyInput from "react-currency-input-field"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { cn } from "@/lib/utils"
import { Icons } from "./icons"

type Props = {
  value: string
  onChange: (value: string | undefined) => void
  disabled?: boolean
  placeholder?: string
}

export const AmountInput = ({
  value,
  onChange,
  disabled,
  placeholder,
}: Props) =>{

  const parsedValue = parseFloat(value)
  const isIncome = parsedValue > 0
  const isExpense = parsedValue < 0

  const onReserveValue = () => {
     if (!value) return;

     const newValue = parseFloat(value) * -1
     onChange(newValue.toString())
  }

  return(
    <div className="relative">
      <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <button 
            type="button"
            onClick={onReserveValue}
            className={cn(
              "absolute left-1.5 top-1.5 flex items-center justify-center rounded-md bg-slate-400 p-2 transition hover:bg-slate-500",
              isIncome && "bg-emerald-500 hover:bg-emerald-600",
              isExpense && "bg-red-500 hover:bg-red-600", 

            )}
            
            >
              {!parsedValue && <Icons.info className="size-3 text-white" />}
              {isIncome && <Icons.plusCircle className="size-3 text-white" />}
              {isExpense && <Icons.minusCircle className="size-3 text-white" />}
            </button>
          </TooltipTrigger>
          <TooltipContent>
          Use [+] for income and [-] for expense
          </TooltipContent>
          </Tooltip>
      </TooltipProvider>
      <CurrencyInput
        prefix="$"
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        value={value}
        onValueChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        decimalsLimit={2}
        decimalScale={2}
      />
      <p className="mt-2 text-xs text-muted-foreground">
        {isIncome && "This will count as income"}
        {isExpense && "This will count as expense"}
      </p>
    </div>
  )
}