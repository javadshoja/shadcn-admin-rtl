import {
  IconCash,
  IconShield,
  IconUsersGroup,
  IconUserShield,
} from '@tabler/icons-react'
import { UserStatus } from './schema'

export const callTypes = new Map<
  UserStatus,
  { className: string; label: string }
>([
  [
    'active',
    {
      className:
        'bg-teal-100/30 text-teal-900 dark:text-teal-200 border-teal-200',
      label: 'فعال',
    },
  ],
  [
    'inactive',
    { className: 'bg-neutral-300/40 border-neutral-300', label: 'غیرفعال' },
  ],
  [
    'invited',
    {
      className: 'bg-sky-200/40 text-sky-900 dark:text-sky-100 border-sky-300',
      label: 'دعوت شده',
    },
  ],
  [
    'suspended',
    {
      className:
        'bg-destructive/10 dark:bg-destructive/50 text-destructive dark:text-primary border-destructive/10',
      label: 'معلق',
    },
  ],
])

export const userTypes = [
  {
    label: 'مدیر کل',
    value: 'superadmin',
    icon: IconShield,
  },
  {
    label: 'مدیر',
    value: 'admin',
    icon: IconUserShield,
  },
  {
    label: 'مدیر میانی',
    value: 'manager',
    icon: IconUsersGroup,
  },
  {
    label: 'صندوق‌دار',
    value: 'cashier',
    icon: IconCash,
  },
] as const
