import ContentSection from '../components/content-section'
import ProfileForm from './profile-form'

export default function SettingsProfile() {
  return (
    <ContentSection
      title='پروفایل'
      desc='این نحوه نمایش شما به دیگران در سایت است.'
    >
      <ProfileForm />
    </ContentSection>
  )
}
