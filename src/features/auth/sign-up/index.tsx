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
import { SignUpForm } from './components/sign-up-form'

export default function SignUp() {
  return (
    <AuthLayout>
      <Card className='gap-4'>
        <CardHeader>
          <CardTitle className='text-lg tracking-tight'>
            ایجاد حساب کاربری
          </CardTitle>
          <CardDescription>
            ایمیل و رمز عبور خود را برای ایجاد حساب کاربری وارد کنید. <br />
            قبلاً حساب کاربری دارید؟{' '}
            <Link
              to='/sign-in'
              className='hover:text-primary underline underline-offset-4'
            >
              ورود
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
        <CardFooter>
          <p className='text-muted-foreground px-8 text-center text-sm'>
            با ایجاد حساب کاربری، شما با{' '}
            <a
              href='/terms'
              className='hover:text-primary underline underline-offset-4'
            >
              شرایط خدمات
            </a>{' '}
            و{' '}
            <a
              href='/privacy'
              className='hover:text-primary underline underline-offset-4'
            >
              سیاست حفظ حریم خصوصی
            </a>{' '}
            ما موافقت می‌کنید.
          </p>
        </CardFooter>
      </Card>
    </AuthLayout>
  )
}
