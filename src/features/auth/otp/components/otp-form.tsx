import { HTMLAttributes, useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import { showSubmittedData } from '@/utils/show-submitted-data'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '@/components/ui/input-otp'

type OtpFormProps = HTMLAttributes<HTMLFormElement>

const formSchema = z.object({
  otp: z.string().min(1, { message: 'لطفاً کد OTP خود را وارد کنید.' }),
})

export function OtpForm({ className, ...props }: OtpFormProps) {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { otp: '' },
  })

  const otp = form.watch('otp')

  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)
    showSubmittedData(data)

    setTimeout(() => {
      setIsLoading(false)
      navigate({ to: '/' })
    }, 1000)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('grid gap-2', className)}
        {...props}
      >
        <FormField
          control={form.control}
          name='otp'
          render={({ field }) => (
            <FormItem dir='ltr'>
              <FormLabel className='sr-only'>رمز عبور یک‌بار مصرف</FormLabel>
              <FormControl>
                <InputOTP
                  maxLength={6}
                  {...field}
                  dir='ltr'
                  containerClassName='justify-between sm:[&>[data-slot="input-otp-group"]>div]:w-12'
                >
                  <InputOTPGroup dir='ltr'>
                    <InputOTPSlot index={0} dir='ltr' />
                    <InputOTPSlot index={1} dir='ltr' />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup dir='ltr'>
                    <InputOTPSlot index={2} dir='ltr' />
                    <InputOTPSlot index={3} dir='ltr' />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup dir='ltr'>
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='mt-2' disabled={otp.length < 6 || isLoading}>
          تأیید
        </Button>
      </form>
    </Form>
  )
}
