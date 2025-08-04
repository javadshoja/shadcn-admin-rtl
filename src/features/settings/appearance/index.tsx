import ContentSection from '../components/content-section'
import { AppearanceForm } from './appearance-form'

export default function SettingsAppearance() {
  return (
    <ContentSection
      title='ظاهر'
      desc='ظاهر برنامه را سفارشی کنید. به صورت خودکار بین تم‌های روز و شب جابجا شوید.'
    >
      <AppearanceForm />
    </ContentSection>
  )
}
