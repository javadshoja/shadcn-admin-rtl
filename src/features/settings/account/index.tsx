import ContentSection from '../components/content-section'
import { AccountForm } from './account-form'

export default function SettingsAccount() {
  return (
    <ContentSection
      title='حساب کاربری'
      desc='تنظیمات حساب کاربری خود را به‌روزرسانی کنید. زبان و منطقه زمانی مورد علاقه خود را تنظیم کنید.'
    >
      <AccountForm />
    </ContentSection>
  )
}
