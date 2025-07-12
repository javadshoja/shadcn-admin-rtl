import { Link } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import AuthLayout from '../auth-layout'
import { ForgotPasswordForm } from './components/forgot-password-form'

export default function ForgotPassword() {
  return (
    <AuthLayout>
      <Card className='gap-4'>
        <CardHeader>
          <CardTitle className='text-lg tracking-tight'>
            فراموشی رمز عبور
          </CardTitle>
          <CardDescription>
            ایمیل ثبت‌نام شده خود را وارد کنید و <br /> ما لینکی برای بازنشانی
            رمز عبور شما ارسال خواهیم کرد.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ForgotPasswordForm />
        </CardContent>
        <CardFooter>
          <p className='text-muted-foreground px-8 text-center text-sm'>
            حساب کاربری ندارید؟{' '}
            <Link
              to='/sign-up'
              className='hover:text-primary underline underline-offset-4'
            >
              ثبت‌نام کنید
            </Link>
            .
          </p>
        </CardFooter>
      </Card>
    </AuthLayout>
  )
}
