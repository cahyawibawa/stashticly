import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Icons } from '@/components/icons'
import { insertTransactionSchema } from '@/db/schema'
import { useCreateTransaction } from '../api/use-create-transaction'
import { useNewTransaction} from '@/features/transactions/hooks/use-new-transaction'
import { z } from 'zod'
import { useCreateCategory } from '@/features/categories/api/use-create-category'
import { useGetCategories } from '@/features/categories/api/use-get-categories'
import { useGetAccounts } from '@/features/accounts/api/use-get-accounts'
import { useCreateAccount } from '@/features/accounts/api/use-create-account'
import { TransactionForm } from './transaction-form'


const formSchema = insertTransactionSchema.omit({
  id: true,
})

type FormValues = z.input<typeof formSchema>

export const NewTransactionSheet = () => {
  const { isOpen, onClose } = useNewTransaction()

  const createMutation = useCreateTransaction()

  const categoryQuery = useGetCategories()
  const categoryMutation = useCreateCategory()
  const onCreateCategory = (name: string) => categoryMutation.mutate({
    name,
  })
  const categoryOptions = (categoryQuery.data ?? []).map((category) => ({
    label: category.name,
    value: category.id,
  }))

  const accountQuery = useGetAccounts()
  const accountMutation = useCreateAccount()
  const onCreateAccount = (name: string) => accountMutation.mutate({
    name,
  })
  const accountOptions = (accountQuery.data ?? []).map((account) => ({
    label: account.name,
    value: account.id,
  }))


  const isPending = createMutation.isPending || 
  categoryMutation.isPending || 
  accountMutation.isPending;

  const isLoading = categoryQuery.isLoading || accountQuery.isLoading


  const onSubmit = (values: FormValues) => {
    createMutation.mutate(values, {
      onSuccess: () => {
        onClose()
      },
    })
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          <SheetTitle>New Transaction</SheetTitle>
          <SheetDescription>
            Add new transactions.
          </SheetDescription>
        </SheetHeader>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icons.loader className="size-4 animate-spin text-muted-foreground" />
          </div>
        )
      : (
       <TransactionForm
       onSubmit={onSubmit}
       disabled={isPending}
       categoryOptions={categoryOptions}
       onCreateCategory={onCreateCategory}
       accountOptions={accountOptions}
       onCreateAcccount={onCreateAccount}
       
       />
      )}
      </SheetContent>
    </Sheet>
  )
}
