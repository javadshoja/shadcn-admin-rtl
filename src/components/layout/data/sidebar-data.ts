import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconBug,
  IconChecklist,
  IconError404,
  IconHelp,
  IconLayoutDashboard,
  IconLock,
  IconLockAccess,
  IconMessages,
  IconNotification,
  IconPackages,
  IconPalette,
  IconServerOff,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUserOff,
  IconUsers,
} from '@tabler/icons-react'
import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react'
import { ClerkLogo } from '@/assets/clerk-logo'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'jbrave',
    email: 'ijbrave@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'مدیریت',
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
    {
      name: 'شرکت acme',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'گروه acme',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],
  navGroups: [
    {
      title: 'عمومی',
      items: [
        {
          title: 'نمای کلی',
          url: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: 'تسک ها',
          url: '/tasks',
          icon: IconChecklist,
        },
        {
          title: 'برنامه ها',
          url: '/apps',
          icon: IconPackages,
        },
        {
          title: 'چت ها',
          url: '/chats',
          badge: '3',
          icon: IconMessages,
        },
        {
          title: 'کاربران',
          url: '/users',
          icon: IconUsers,
        },
        {
          title: 'محافظت شده توسط Clerk',
          icon: ClerkLogo,
          items: [
            {
              title: 'ورود',
              url: '/clerk/sign-in',
            },
            {
              title: 'ثبت نام',
              url: '/clerk/sign-up',
            },
            {
              title: 'مدیریت کاربران',
              url: '/clerk/user-management',
            },
          ],
        },
      ],
    },
    {
      title: 'صفحات',
      items: [
        {
          title: 'احراز هویت',
          icon: IconLockAccess,
          items: [
            {
              title: 'ورود',
              url: '/sign-in',
            },
            {
              title: 'ورود (2 ستون)',
              url: '/sign-in-2',
            },
            {
              title: 'ثبت نام',
              url: '/sign-up',
            },
            {
              title: 'فراموشی رمز عبور',
              url: '/forgot-password',
            },
            {
              title: 'کد یکبار مصرف',
              url: '/otp',
            },
          ],
        },
        {
          title: 'خطاها',
          icon: IconBug,
          items: [
            {
              title: 'غیرمجاز',
              url: '/401',
              icon: IconLock,
            },
            {
              title: 'ممنوع',
              url: '/403',
              icon: IconUserOff,
            },
            {
              title: 'یافت نشد',
              url: '/404',
              icon: IconError404,
            },
            {
              title: 'خطای سرور داخلی',
              url: '/500',
              icon: IconServerOff,
            },
            {
              title: 'خطای نگهداری',
              url: '/503',
              icon: IconBarrierBlock,
            },
          ],
        },
      ],
    },
    {
      title: 'دیگر',
      items: [
        {
          title: 'تنظیمات',
          icon: IconSettings,
          items: [
            {
              title: 'پروفایل',
              url: '/settings',
              icon: IconUserCog,
            },
            {
              title: 'حساب کاربری',
              url: '/settings/account',
              icon: IconTool,
            },
            {
              title: 'ظاهر',
              url: '/settings/appearance',
              icon: IconPalette,
            },
            {
              title: 'اعلانات',
              url: '/settings/notifications',
              icon: IconNotification,
            },
            {
              title: 'نمایش',
              url: '/settings/display',
              icon: IconBrowserCheck,
            },
          ],
        },
        {
          title: 'مرکز راهنما',
          url: '/help-center',
          icon: IconHelp,
        },
      ],
    },
  ],
}
