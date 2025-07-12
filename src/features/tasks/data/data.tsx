import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowUp,
  IconCircle,
  IconCircleCheck,
  IconCircleX,
  IconExclamationCircle,
  IconStopwatch,
} from '@tabler/icons-react'

export const labels = [
  {
    value: 'bug',
    label: 'خطا',
  },
  {
    value: 'feature',
    label: 'ویژگی',
  },
  {
    value: 'documentation',
    label: 'مستندات',
  },
]

export const statuses = [
  {
    value: 'backlog',
    label: 'لیست انتظار',
    icon: IconExclamationCircle,
  },
  {
    value: 'todo',
    label: 'انجام نشده',
    icon: IconCircle,
  },
  {
    value: 'in progress',
    label: 'در حال انجام',
    icon: IconStopwatch,
  },
  {
    value: 'done',
    label: 'انجام شده',
    icon: IconCircleCheck,
  },
  {
    value: 'canceled',
    label: 'لغو شده',
    icon: IconCircleX,
  },
]

export const priorities = [
  {
    label: 'کم',
    value: 'low',
    icon: IconArrowDown,
  },
  {
    label: 'متوسط',
    value: 'medium',
    icon: IconArrowLeft,
  },
  {
    label: 'زیاد',
    value: 'high',
    icon: IconArrowUp,
  },
]
