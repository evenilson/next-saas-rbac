import Image from 'next/image'

import evenilsonPortfolioIcon from '@/assets/evenilson-portfolio-icon.svg'
import { ProfileButton } from './profile-button'
import { Slash } from 'lucide-react'
import { OrganizationSwitcher } from './organization-switcher'
import { ability } from '@/auth/auth'
import { Separator } from './ui/separator'
import { ThemeSwitcher } from './theme/theme-switcher'
import { ProjectSwitcher } from './project-switcher'
import { PendingInvites } from './pending-invites'

export async function Header() {
  const permissions = await ability()

  return (
    <header className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src={evenilsonPortfolioIcon}
          className="size-6"
          alt="Evenilson portfolio logo"
        />
        <Slash className="text-border size-3 -rotate-[24deg]" />

        <OrganizationSwitcher />

        {permissions?.can('get', 'Project') && (
          <>
            <Slash className="text-border size-3 -rotate-[24deg]" />
            <ProjectSwitcher />
          </>
        )}
      </div>
      <div className="flex items-center gap-4">
        <PendingInvites />
        <ThemeSwitcher />
        <Separator orientation="vertical" className="!h-5" />
        <ProfileButton />
      </div>
    </header>
  )
}
