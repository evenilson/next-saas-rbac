'use client'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Check, UserPlus2, X } from 'lucide-react'
import { useState } from 'react'

import { getPendingInvites } from '@/http/get-pending-invites'
import { queryClient } from '@/lib/react-query'

import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { acceptInviteAction, rejectInviteAction } from './actions'

dayjs.extend(relativeTime)

export function PendingInvites() {
  const [isOpen, setIsOpen] = useState(false)

  const { data } = useQuery({
    queryKey: ['pending-invites'],
    queryFn: getPendingInvites,
    enabled: isOpen,
  })

  async function handleAcceptInvite(inviteId: string) {
    await acceptInviteAction(inviteId)

    queryClient.invalidateQueries({ queryKey: ['pending-invites'] })
  }

  async function handleRejectInvite(inviteId: string) {
    await rejectInviteAction(inviteId)

    queryClient.invalidateQueries({ queryKey: ['pending-invites'] })
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button size="icon" variant="ghost">
          <UserPlus2 className="size-4" />
          <span className="sr-only">Pending invites</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 space-y-2">
        <span className="block text-sm font-medium">
          Pending invites ({data?.invites.length ?? 0})
        </span>
        {data?.invites.map((invite) => {
          return (
            <div className="space-y-2" key={invite.id}>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="text-foreground font-medium">
                  {invite.author?.name ?? 'Someone'}
                </span>{' '}
                invited you to join{' '}
                <span className="text-foreground font-medium">
                  {invite.organization.name}
                </span>{' '}
                <span>{dayjs(invite.createdAt).fromNow()}</span>
              </p>
              <div className="flex gap-1">
                <Button
                  onClick={() => handleAcceptInvite(invite.id)}
                  size="xs"
                  variant="outline"
                >
                  <Check className="mr-1.5 size-3" />
                  Accept
                </Button>

                <Button
                  onClick={() => handleRejectInvite(invite.id)}
                  size="xs"
                  variant="ghost"
                  className="text-muted-foreground"
                >
                  <X className="mr-1.5 size-3" />
                  Reject
                </Button>
              </div>
            </div>
          )
        })}
      </PopoverContent>
    </Popover>
  )
}
