import ContentSection from '../components/content-section'
import { NotificationsForm } from './notifications-form'

export default function SettingsNotifications() {
  return (
    <ContentSection
      title='اعلان‌ها'
      desc='نحوه دریافت اعلان‌ها را پیکربندی کنید.'
    >
      <NotificationsForm />
    </ContentSection>
  )
}
