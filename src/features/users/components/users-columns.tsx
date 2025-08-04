import { ColumnDef } from '@tanstack/react-table'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import LongText from '@/components/long-text'
import { callTypes, userTypes } from '../data/data'
import { User } from '../data/schema'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'

export const columns: ColumnDef<User>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='انتخاب همه'
        className='translate-y-[2px]'
      />
    ),
    meta: {
      className: cn(
        'sticky md:table-cell right-0 z-10 rounded-tl',
        'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted'
      ),
    },
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='انتخاب ردیف'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'username',
    id: 'username',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='نام کاربری' />
    ),
    cell: ({ row }) => (
      <LongText className='max-w-36'>{row.getValue('username')}</LongText>
    ),
    meta: {
      className: cn(
        'drop-shadow-[0_1px_2px_rgb(0_0_0_/_0.1)] dark:drop-shadow-[0_1px_2px_rgb(255_255_255_/_0.1)] lg:drop-shadow-none',
        'bg-background transition-colors duration-200 group-hover/row:bg-muted group-data-[state=selected]/row:bg-muted',
        'sticky right--6 md:table-cell'
      ),
      title: 'نام کاربری',
    },
    enableHiding: false,
  },
  {
    id: 'fullName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='نام' />
    ),
    cell: ({ row }) => {
      const { firstName, lastName } = row.original
      const fullName = `${firstName} ${lastName}`
      return <LongText className='max-w-36'>{fullName}</LongText>
    },
    meta: { className: 'w-36', title: 'نام' },
  },
  {
    id: 'email',
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='ایمیل' />
    ),
    cell: ({ row }) => (
      <div className='w-fit text-nowrap'>{row.getValue('email')}</div>
    ),
    meta: { title: 'ایمیل' },
  },
  {
    id: 'phoneNumber',
    accessorKey: 'phoneNumber',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='شماره تلفن' />
    ),
    cell: ({ row }) => (
      <div className='dir-ltr text-end'>{row.getValue('phoneNumber')}</div>
    ),
    enableSorting: false,
    meta: { title: 'شماره تلفن' },
  },
  {
    accessorKey: 'status',
    id: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='وضعیت' />
    ),
    cell: ({ row }) => {
      const { status } = row.original
      const { className, label } = callTypes.get(status) ?? {}
      return (
        <div className='flex space-x-2'>
          <Badge variant='outline' className={cn('capitalize', className)}>
            {label}
          </Badge>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableHiding: false,
    enableSorting: false,
    meta: { title: 'وضعیت' },
  },
  {
    accessorKey: 'role',
    id: 'role',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='نقش' />
    ),
    cell: ({ row }) => {
      const { role } = row.original
      const userType = userTypes.find(({ value }) => value === role)

      if (!userType) {
        return null
      }

      return (
        <div className='flex items-center gap-x-2'>
          {userType.icon && (
            <userType.icon size={16} className='text-muted-foreground' />
          )}
          <span className='text-sm capitalize'>{userType.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
    enableSorting: false,
    enableHiding: false,
    meta: { title: 'نقش' },
  },
  {
    id: 'actions',
    cell: DataTableRowActions,
  },
]
