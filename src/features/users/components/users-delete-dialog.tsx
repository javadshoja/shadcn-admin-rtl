'use client'

import { useState } from 'react'
import { IconAlertTriangle } from '@tabler/icons-react'
import { showSubmittedData } from '@/utils/show-submitted-data'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ConfirmDialog } from '@/components/confirm-dialog'
import { User } from '../data/schema'

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  currentRow: User
}

export function UsersDeleteDialog({ open, onOpenChange, currentRow }: Props) {
  const [value, setValue] = useState('')

  const handleDelete = () => {
    if (value.trim() !== currentRow.username) return

    onOpenChange(false)
    showSubmittedData(currentRow, 'The following user has been deleted:')
  }

  return (
    <ConfirmDialog
      open={open}
      onOpenChange={onOpenChange}
      handleConfirm={handleDelete}
      disabled={value.trim() !== currentRow.username}
      title={
        <span className='text-destructive'>
          <IconAlertTriangle
            className='stroke-destructive ml-1 inline-block'
            size={18}
          />{' '}
          حذف کاربر
        </span>
      }
      desc={
        <div className='space-y-4'>
          <p className='mb-2'>
            آیا از حذف{' '}
            <span className='font-bold'>{currentRow.username}</span> مطمئن هستید؟
            <br />
            این عمل کاربر با نقش{' '}
            <span className='font-bold'>
              {currentRow.role.toUpperCase()}
            </span>{' '}
            را برای همیشه از سیستم حذف خواهد کرد. این عمل قابل بازگشت نیست.
          </p>

          <Label className='my-2'>
            نام کاربری:
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder='برای تایید حذف، نام کاربری را وارد کنید.'
            />
          </Label>

          <Alert variant='destructive'>
            <AlertTitle>هشدار!</AlertTitle>
            <AlertDescription>
              لطفا دقت کنید، این عملیات قابل بازگشت نیست.
            </AlertDescription>
          </Alert>
        </div>
      }
      confirmText='حذف'
      destructive
    />
  )
}
