import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import AuthLayout from '../auth-layout'
import { UserAuthForm } from './components/user-auth-form'

export default function SignIn() {
  return (
    <AuthLayout>
      <Card className='gap-4'>
        <CardHeader>
          <CardTitle className='text-lg tracking-tight'>ورود</CardTitle>
          <CardDescription>
            ایمیل و رمز عبور خود را در زیر وارد کنید تا <br />
            وارد حساب کاربری خود شوید
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UserAuthForm />
        </CardContent>
        <CardFooter>
          <p className='text-muted-foreground px-8 text-center text-sm'>
            با کلیک بر روی ورود، شما با{' '}
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
