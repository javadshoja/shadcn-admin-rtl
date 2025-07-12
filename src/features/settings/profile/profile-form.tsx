import { z } from 'zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import { showSubmittedData } from '@/utils/show-submitted-data'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: 'نام کاربری باید حداقل ۲ کاراکتر باشد.',
    })
    .max(30, {
      message: 'نام کاربری نباید بیشتر از ۳۰ کاراکتر باشد.',
    }),
  email: z
    .string({
      required_error: 'لطفاً یک ایمیل برای نمایش انتخاب کنید.',
    })
    .email(),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: 'لطفاً یک URL معتبر وارد کنید.' }),
      })
    )
    .optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  bio: 'من یک کامپیوتر دارم.',
  urls: [
    { value: 'https://shadcn.com' },
    { value: 'http://twitter.com/shadcn' },
  ],
}

export default function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  const { fields, append } = useFieldArray({
    name: 'urls',
    control: form.control,
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => showSubmittedData(data))}
        className='space-y-8'
      >
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>نام کاربری</FormLabel>
              <FormControl>
                <Input placeholder='علی محمدی' {...field} />
              </FormControl>
              <FormDescription>
                این نام نمایشی عمومی شماست. می‌تواند نام واقعی شما یا یک نام
                مستعار باشد. شما فقط هر ۳۰ روز یک بار می‌توانید این را تغییر
                دهید.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>ایمیل</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='یک ایمیل تأیید شده برای نمایش انتخاب کنید' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent dir='rtl'>
                  <SelectItem value='m@example.com'>m@example.com</SelectItem>
                  <SelectItem value='m@google.com'>m@google.com</SelectItem>
                  <SelectItem value='m@support.com'>m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                می‌توانید آدرس‌های ایمیل تأیید شده خود را در{' '}
                <Link to='/'>تنظیمات ایمیل</Link>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='bio'
          render={({ field }) => (
            <FormItem>
              <FormLabel>بیوگرافی</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='کمی درباره خودتان به ما بگویید'
                  className='resize-none'
                  {...field}
                />
              </FormControl>
              <FormDescription>
                می‌توانید با <span>@اشاره</span> به کاربران و سازمان‌های دیگر،
                به آن‌ها لینک دهید.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`urls.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && 'sr-only')}>
                    آدرس‌ها
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && 'sr-only')}>
                    لینک‌های وب‌سایت، وبلاگ یا پروفایل‌های شبکه‌های اجتماعی خود
                    را اضافه کنید.
                  </FormDescription>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type='button'
            variant='outline'
            size='sm'
            className='mt-2'
            onClick={() => append({ value: '' })}
          >
            افزودن URL
          </Button>
        </div>
        <Button type='submit'>به‌روزرسانی پروفایل</Button>
      </form>
    </Form>
  )
}
