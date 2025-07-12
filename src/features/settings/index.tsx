import { Outlet } from '@tanstack/react-router'
import {
  IconBrowserCheck,
  IconNotification,
  IconPalette,
  IconTool,
  IconUser,
} from '@tabler/icons-react'
import { Separator } from '@/components/ui/separator'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import SidebarNav from './components/sidebar-nav'

export default function Settings() {
  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        <Search />
        <div className='mr-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main fixed>
        <div className='space-y-0.5'>
          <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
            تنظیمات
          </h1>
          <p className='text-muted-foreground'>
            تنظیمات حساب کاربری خود را مدیریت کرده و اولویت‌های ایمیل را تنظیم کنید.
          </p>
        </div>
        <Separator className='my-4 lg:my-6' />
        <div className='flex flex-1 flex-col space-y-2 overflow-hidden md:space-y-2 lg:flex-row lg:space-y-0 lg:space-x-12'>
          <aside className='top-0 lg:sticky lg:w-1/5'>
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className='flex w-full overflow-y-hidden p-1'>
            <Outlet />
          </div>
        </div>
      </Main>
    </>
  )
}

const sidebarNavItems = [
  {
    title: 'پروفایل',
    icon: <IconUser size={18} />,
    href: '/settings',
  },
  {
    title: 'حساب کاربری',
    icon: <IconTool size={18} />,
    href: '/settings/account',
  },
  {
    title: 'ظاهر',
    icon: <IconPalette size={18} />,
    href: '/settings/appearance',
  },
  {
    title: 'اعلان‌ها',
    icon: <IconNotification size={18} />,
    href: '/settings/notifications',
  },
  {
    title: 'نمایش',
    icon: <IconBrowserCheck size={18} />,
    href: '/settings/display',
  },
]
