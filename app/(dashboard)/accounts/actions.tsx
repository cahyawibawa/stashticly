'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useOpenAccount } from '@/features/accounts/hooks/use-open-account'
import { Edit, MoreHorizontal } from 'lucide-react'

type Props = {
  id: string
}

export const Actions = ({ id }: Props) => {
  const { onOpen } = useOpenAccount()

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="size-8 p-0">
            <MoreHorizontal className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem disabled={false} onClick={() => onOpen(id)}>
            <Edit className="mr-2 size-4" />
            Edit
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
