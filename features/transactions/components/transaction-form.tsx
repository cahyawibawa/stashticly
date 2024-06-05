import { AmountInput } from '@/components/amount-input'
import { DatePicker } from '@/components/date-picker'
import { Icons } from '@/components/icons'
import { Select } from '@/components/select'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { insertTransactionSchema } from '@/db/schema'
import { convertAmountToMiliUnits } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  date: z.coerce.date(),
  accountId: z.string(),
  categoryId: z.string().nullable().optional(),
  amount: z.string(),
  payee: z.string(),
  notes: z.string().nullable().optional(),
})

const apiSchema = insertTransactionSchema.omit({ id: true })

type FormValues = z.input<typeof formSchema>
type ApiFormValues = z.input<typeof apiSchema>

type Props = {
  id?: string
  defaultValues?: FormValues
  onSubmit: (values: ApiFormValues) => void
  onDelete?: () => void
  disabled?: boolean
  accountOptions: {
    label: string;
    value: string;
  }[];
  categoryOptions: {
    label: string;
    value: string;
  }[];
  onCreateAcccount: (name: string) => void;
  onCreateCategory: (name: string) => void;

}

export const TransactionForm = ({
  id,
  defaultValues,
  onSubmit,
  onDelete,
  disabled,
  accountOptions,
  categoryOptions,
  onCreateAcccount,
  onCreateCategory,
}: Props) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  })

  const handleSubmit = (values: FormValues) => {
    const amount = parseFloat(values.amount)
    const amountMiliUnits = convertAmountToMiliUnits(amount)

    onSubmit({
      ...values,
      amount: amountMiliUnits,
    })
  }

  const handleDelete = () => {
    onDelete?.()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 pt-4"
      >
        <FormField
          name="date"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
              <DatePicker
              value={field.value}
              onChange={field.onChange}
              disabled={disabled}
              />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="accountId"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account</FormLabel>
              <FormControl>
                <Select
                placeholder='Select an account'
                options={accountOptions}
                onCreate={onCreateAcccount}
                value={field.value}
                onChange={field.onChange}
                disabled={disabled}
                />
              </FormControl>
            </FormItem>
          )}
        />
         <FormField
          name="categoryId"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select
                placeholder='Select an category'
                options={categoryOptions}
                onCreate={onCreateCategory}
                value={field.value}
                onChange={field.onChange}
                disabled={disabled}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="payee"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payee</FormLabel>
              <FormControl>
               <Input
               disabled={disabled}
               placeholder='Add a payee'
               {...field}
               />
              </FormControl>
            </FormItem>
          )}
        />
         <FormField
          name="amount"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
               <AmountInput
               disabled={disabled}
               placeholder='Add an amount'
               {...field}
               />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="notes"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
               <Textarea
               {...field}
               value={field.value ?? ""}
               placeholder='Optional notes'
               disabled={disabled}
               />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="w-full" disabled={disabled}>
          {id ? 'Save changes' : 'Create transaction'}
        </Button>
        {!!id && (
          <Button
            type="button"
            disabled={disabled}
            onClick={handleDelete}
            className="w-full"
            variant="outline"
          >
            <Icons.trash className="mr-2 size-4" />
            Delete transaction
          </Button>
        )}
      </form>
    </Form>
  )
}
