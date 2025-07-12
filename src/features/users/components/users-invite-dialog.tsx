import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconMailPlus, IconSend } from '@tabler/icons-react'
import { showSubmittedData } from '@/utils/show-submitted-data'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SelectDropdown } from '@/components/select-dropdown'
import { userTypes } from '../data/data'

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'ایمیل الزامی است.' })
    .email({ message: 'ایمیل نامعتبر است.' }),
  role: z.string().min(1, { message: 'نقش الزامی است.' }),
  desc: z.string().optional(),
})
type UserInviteForm = z.infer<typeof formSchema>

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function UsersInviteDialog({ open, onOpenChange }: Props) {
  const form = useForm<UserInviteForm>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', role: '', desc: '' },
  })

  const onSubmit = (values: UserInviteForm) => {
    form.reset()
    showSubmittedData(values)
    onOpenChange(false)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(state) => {
        form.reset()
        onOpenChange(state)
      }}
    >
      <DialogContent className='sm:max-w-md'>
        <DialogHeader className='text-right'>
          <DialogTitle className='flex items-center gap-2'>
            <IconMailPlus /> دعوت کاربر
          </DialogTitle>
          <DialogDescription>
            کاربر جدید را با ارسال دعوت‌نامه ایمیلی به تیم خود دعوت کنید. برای
            تعیین سطح دسترسی، یک نقش به آن‌ها اختصاص دهید.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            id='user-invite-form'
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-4'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ایمیل</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      placeholder='مثال: ali.mohammadi@gmail.com'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='role'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>نقش</FormLabel>
                  <SelectDropdown
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    placeholder='یک نقش انتخاب کنید'
                    items={userTypes.map(({ label, value }) => ({
                      label,
                      value,
                    }))}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='desc'
              render={({ field }) => (
                <FormItem className=''>
                  <FormLabel>توضیحات (اختیاری)</FormLabel>
                  <FormControl>
                    <Textarea
                      className='resize-none'
                      placeholder='یک یادداشت شخصی به دعوت‌نامه خود اضافه کنید (اختیاری)'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter className='gap-y-2'>
          <DialogClose asChild>
            <Button variant='outline'>لغو</Button>
          </DialogClose>
          <Button type='submit' form='user-invite-form'>
            دعوت <IconSend />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
