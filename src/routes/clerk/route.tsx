import { createFileRoute, Outlet } from '@tanstack/react-router'
import { IconExternalLink, IconKeyOff } from '@tabler/icons-react'
import { ClerkProvider } from '@clerk/clerk-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { AuthenticatedLayout } from '@/components/layout/authenticated-layout'
import { Main } from '@/components/layout/main'
import { ThemeSwitch } from '@/components/theme-switch'

export const Route = createFileRoute('/clerk')({
  component: RouteComponent,
})

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function RouteComponent() {
  if (!PUBLISHABLE_KEY) {
    return <MissingClerkPubKey />
  }

  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl='/clerk/sign-in'
      signInUrl='/clerk/sign-in'
      signUpUrl='/clerk/sign-up'
      signInFallbackRedirectUrl='/clerk/user-management'
      signUpFallbackRedirectUrl='/clerk/user-management'
    >
      <Outlet />
    </ClerkProvider>
  )
}

function MissingClerkPubKey() {
  const codeBlock =
    'bg-foreground/10 rounded-sm py-0.5 px-1 text-xs text-foreground font-bold'
  return (
    <AuthenticatedLayout>
      <div className='bg-background flex h-16 justify-between p-4'>
        <SidebarTrigger variant='outline' className='scale-125 sm:scale-100' />
        <ThemeSwitch />
      </div>
      <Main className='flex flex-col items-center justify-start'>
        <div className='max-w-2xl'>
          <Alert>
            <IconKeyOff className='size-4' />
            <AlertTitle>کلید قابل انتشار یافت نشد!</AlertTitle>
            <AlertDescription>
              <p className='text-balance'>
                شما باید یک کلید قابل انتشار از Clerk تولید کرده و آن را داخل
                فایل <code className={codeBlock}>.env</code> قرار دهید.
              </p>
            </AlertDescription>
          </Alert>

          <h1 className='mt-4 text-2xl font-bold'>
            کلید API Clerk خود را تنظیم کنید
          </h1>
          <div className='text-foreground/75 mt-4 flex flex-col gap-y-4'>
            <ol className='list-inside list-decimal space-y-1.5'>
              <li>
                در{' '}
                <a
                  href='https://go.clerk.com/GttUAaK'
                  target='_blank'
                  className='underline decoration-dashed underline-offset-4 hover:decoration-solid'
                >
                  Clerk
                  <sup>
                    <IconExternalLink className='inline-block size-4' />
                  </sup>
                </a>{' '}
                داشبورد، به صفحه کلیدهای API بروید.
              </li>
              <li>
                در بخش <strong>کپی سریع</strong>، کلید قابل انتشار Clerk خود را
                کپی کنید.
              </li>
              <li>
                نام <code className={codeBlock}>.env.example</code> را به{' '}
                <code className={codeBlock}>.env</code> تغییر دهید.
              </li>
              <li>
                کلید خود را در فایل <code className={codeBlock}>.env</code> خود
                جایگذاری کنید.
              </li>
            </ol>
            <p>نتیجه نهایی باید شبیه به موارد زیر باشد:</p>

            <div
              className='@container space-y-2 rounded-md bg-slate-800 px-3 py-3 text-sm text-slate-200'
              dir='ltr'
            >
              <span className='pr-1'>.env</span>
              <pre className='overflow-auto overscroll-x-contain rounded bg-slate-950 px-2 py-1 text-xs'>
                <code>
                  <span className='before:text-slate-400 md:before:pl-2 md:before:content-["1."]'>
                    VITE_CLERK_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
                  </span>
                </code>
              </pre>
            </div>
          </div>

          <Separator className='my-4 w-full' />

          <Alert>
            <AlertTitle>ادغام Clerk اختیاری است</AlertTitle>
            <AlertDescription>
              <p className='text-balance'>
                ادغام Clerk به طور کامل در{' '}
                <code className={codeBlock}>src/routes/clerk</code> قرار دارد.
                اگر قصد دارید از Clerk به عنوان سرویس احراز هویت خود استفاده
                کنید، ممکن است بخواهید{' '}
                <code className={codeBlock}>ClerkProvider</code> را در مسیر اصلی
                قرار دهید.
              </p>
              <p>
                با این حال، اگر قصد استفاده از Clerk را ندارید، می‌توانید این
                دایرکتوری و وابستگی‌های مرتبط{' '}
                <code className={codeBlock}>@clerk/clerk-react</code> را با خیال
                راحت حذف کنید.
              </p>
              <p className='mt-2 text-sm'>
                این تنظیمات به صورت ماژولار طراحی شده و بر بقیه برنامه تأثیری
                نخواهد گذاشت.
              </p>
            </AlertDescription>
          </Alert>
        </div>
      </Main>
    </AuthenticatedLayout>
  )
}
