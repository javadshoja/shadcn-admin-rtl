import { Button } from '@/components/ui/button'

export default function MaintenanceError() {
  return (
    <div className='h-svh'>
      <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
        <h1 className='text-[7rem] leading-tight font-bold'>503</h1>
        <span className='font-medium'>وب‌سایت در حال تعمیر و نگهداری است!</span>
        <p className='text-muted-foreground text-center'>
          سایت در حال حاضر در دسترس نیست. <br />
          ما به زودی آنلاین خواهیم شد.
        </p>
        <div className='mt-6 flex gap-4'>
          <Button variant='outline'>بیشتر بدانید</Button>
        </div>
      </div>
    </div>
  )
}
