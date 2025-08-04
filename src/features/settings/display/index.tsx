import ContentSection from '../components/content-section'
import { DisplayForm } from './display-form'

export default function SettingsDisplay() {
  return (
    <ContentSection
      title='نمایش'
      desc='موارد را روشن یا خاموش کنید تا کنترل کنید چه چیزی در برنامه نمایش داده شود.'
    >
      <DisplayForm />
    </ContentSection>
  )
}
