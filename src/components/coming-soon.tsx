import { IconPlanet } from '@tabler/icons-react'

export default function ComingSoon() {
  return (
    <div className='h-svh'>
      <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
        <IconPlanet size={72} />
        <h1 className='text-4xl leading-tight font-bold'>به زودی 👀</h1>
        <p className='text-muted-foreground text-center'>
          این صفحه هنوز ایجاد نشده است. <br />
          به زودی!
        </p>
      </div>
    </div>
  )
}
