import ViteLogo from '@/assets/vite.svg'
import { UserAuthForm } from './components/user-auth-form'

export default function SignIn2() {
  return (
    <div className='relative container grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r'>
        <div className='absolute inset-0 bg-zinc-900' />
        <div className='relative z-20 flex items-center text-lg font-medium'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='ml-2 h-6 w-6'
          >
            <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
          </svg>
          Shadcn پنل مدیریت
        </div>

        <img
          src={ViteLogo}
          className='relative m-auto'
          width={301}
          height={60}
          alt='Vite'
        />

        <div className='relative z-20 mt-auto'>
          <blockquote className='space-y-2'>
            <p className='text-lg'>
              &ldquo;این قالب ساعت‌های بی‌شماری از کار را برای من صرفه‌جویی کرده
              و به من کمک کرده است تا طرح‌های خیره‌کننده را سریع‌تر از همیشه به
              مشتریانم ارائه دهم.&rdquo;
            </p>
            <footer className='text-sm'>جان دو</footer>
          </blockquote>
        </div>
      </div>
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-right'>
            <h1 className='text-2xl font-semibold tracking-tight'>ورود</h1>
            <p className='text-muted-foreground text-sm'>
              ایمیل و رمز عبور خود را در زیر وارد کنید تا <br />
              وارد حساب کاربری خود شوید
            </p>
          </div>
          <UserAuthForm />
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
        </div>
      </div>
    </div>
  )
}
