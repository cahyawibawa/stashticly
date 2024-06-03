import { client } from '@/lib/hono'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { type InferRequestType, type InferResponseType } from 'hono'
import { toast } from 'sonner'

type ResponseType = InferResponseType<
  (typeof client.api.transactions)['bulk-delete']['$post']
>
type RequestType = InferRequestType<
  (typeof client.api.transactions)['bulk-delete']['$post']
>['json']

export const useBulkDeleteTransactions = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.transactions['bulk-delete']['$post']({
        json,
      })
      return await response.json()
    },
    onSuccess: () => {
      toast.success('Transactions deleted')
      queryClient.invalidateQueries({ queryKey: ['transactions'] })
      // TODO: also invalidate summary
    },
    onError: () => {
      toast.error('Failed to delete transaction')
    },
  })

  return mutation
}
