import { useState } from 'react'
import { DsButton } from '@/components/ds/DsButton'
import { DsTag } from '@/components/ds/DsTag'
import { DsBadge } from '@/components/ds/DsBadge'
import { DsBadgeRating } from '@/components/ds/DsBadgeRating'
import { DsAvatar } from '@/components/ds/DsAvatar'
import { DsAnnouncement } from '@/components/ds/DsAnnouncement'
import { DsTooltip } from '@/components/ds/DsTooltip'
import { DsOverlay } from '@/components/ds/DsOverlay'
import EventLayout from '@/components/layouts/EventLayout'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-12">
    <h2 className="text-ds-4 font-bold text-neutral-8 mb-6 border-b border-neutral-3 pb-3">{title}</h2>
    {children}
  </section>
)

const SubSection = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="mb-6">
    <h3 className="text-ds-2 font-medium text-neutral-7 mb-3">{label}</h3>
    <div className="flex flex-wrap items-center gap-3">{children}</div>
  </div>
)

const Index = () => {
  const [showOverlay, setShowOverlay] = useState(false)

  return (
    <EventLayout>
      <div className="min-h-screen bg-neutral-1 p-6 md:p-10">
        <header className="mb-10">
          <h1 className="text-ds-6 font-bold text-neutral-9">Design System 範例頁面</h1>
          <p className="text-ds-2 text-neutral-6 mt-2">所有組件的 variant 展示</p>
        </header>

        {/* ── Button ── */}
        <Section title="Button 按鈕">
          <SubSection label="Solid">
            {(['primary', 'success', 'warning', 'danger', 'neutral', 'tertiary', 'momo'] as const).map((l) => (
              <DsButton key={l} variant="solid" level={l} size="medium">{l}</DsButton>
            ))}
            <DsButton variant="solid" level="primary" size="medium" disabled>disabled</DsButton>
          </SubSection>
          <SubSection label="Outline">
            {(['primary', 'success', 'warning', 'danger', 'neutral'] as const).map((l) => (
              <DsButton key={l} variant="outline" level={l} size="medium">{l}</DsButton>
            ))}
          </SubSection>
          <SubSection label="Flat">
            {(['primary', 'success', 'warning', 'danger', 'neutral'] as const).map((l) => (
              <DsButton key={l} variant="flat" level={l} size="medium">{l}</DsButton>
            ))}
          </SubSection>
          <SubSection label="Sizes">
            {(['small', 'medium', 'large'] as const).map((s) => (
              <DsButton key={s} variant="solid" level="primary" size={s}>{s}</DsButton>
            ))}
          </SubSection>
          <SubSection label="Shapes">
            <DsButton variant="solid" level="primary" size="medium" shape="rounded">Rounded</DsButton>
            <DsButton variant="solid" level="primary" size="medium" shape="pill">Pill</DsButton>
          </SubSection>
        </Section>

        {/* ── Tag ── */}
        <Section title="Tag 標籤">
          <SubSection label="Solid">
            {(['primary', 'success', 'warning', 'danger', 'neutral'] as const).map((t) => (
              <DsTag key={t} styleType="solid" type={t} size="medium">{t}</DsTag>
            ))}
          </SubSection>
          <SubSection label="Outline">
            {(['primary', 'success', 'warning', 'danger', 'neutral'] as const).map((t) => (
              <DsTag key={t} styleType="outline" type={t} size="medium">{t}</DsTag>
            ))}
          </SubSection>
          <SubSection label="Sizes">
            {(['small', 'medium', 'large'] as const).map((s) => (
              <DsTag key={s} styleType="solid" type="primary" size={s}>{s}</DsTag>
            ))}
          </SubSection>
        </Section>

        {/* ── Badge ── */}
        <Section title="Badge 徽章">
          <SubSection label="Dot（無內容）">
            {(['primary', 'danger', 'neutral'] as const).map((l) => (
              <span key={l} className="relative inline-block p-3 bg-neutral-3 rounded">
                <span className="text-sm text-neutral-7">{l}</span>
                <DsBadge level={l} className="absolute -top-1 -right-1" />
              </span>
            ))}
          </SubSection>
          <SubSection label="Numeric（有內容）">
            <DsBadge level="primary" count={5} />
            <DsBadge level="danger" count={12} />
            <DsBadge level="neutral" count={99} />
            <DsBadge level="danger" count={100} />
          </SubSection>
        </Section>

        {/* ── Badge Rating ── */}
        <Section title="Badge Rating 評分">
          <SubSection label="Sizes">
            {(['small', 'medium', 'large'] as const).map((s) => (
              <DsBadgeRating key={s} score={4.7} size={s} />
            ))}
          </SubSection>
          <SubSection label="Score Ranges">
            <DsBadgeRating score={4.8} size="medium" />
            <DsBadgeRating score={4.2} size="medium" />
            <DsBadgeRating score={3.5} size="medium" />
            <DsBadgeRating score={2.3} size="medium" />
            <DsBadgeRating score={1.5} size="medium" />
          </SubSection>
        </Section>

        {/* ── Avatar ── */}
        <Section title="Avatar 頭像">
          <SubSection label="Acronym">
            {['Alice', 'Bob', 'Cindy', 'David', 'Eve'].map((name) => (
              <DsAvatar key={name} name={name} size={48} />
            ))}
          </SubSection>
          <SubSection label="Placeholder">
            <DsAvatar size={32} />
            <DsAvatar size={40} />
            <DsAvatar size={48} />
            <DsAvatar size={56} />
          </SubSection>
          <SubSection label="Sizes（Acronym）">
            {([32, 36, 40, 44, 48, 52, 56] as const).map((s) => (
              <DsAvatar key={s} name="L" size={s} />
            ))}
          </SubSection>
        </Section>

        {/* ── Announcement ── */}
        <Section title="Announcement 公告">
          <div className="space-y-4">
            <DsAnnouncement type="primary" title="系統通知" rounded closable>
              平台將於 2026/04/01 進行例行維護，預計影響 2 小時。
            </DsAnnouncement>
            <DsAnnouncement type="warning" title="注意事項" rounded>
              您的付款方式即將到期，請儘速更新。
            </DsAnnouncement>
            <DsAnnouncement type="success" rounded>
              訂單已成功提交！您可以在「我的訂單」中查看進度。
            </DsAnnouncement>
          </div>
        </Section>

        {/* ── Tooltip ── */}
        <Section title="Tooltip 提示">
          <SubSection label="Placement">
            <DsTooltip content="上方提示" placement="top">
              <DsButton variant="outline" level="neutral" size="small">Hover（Top）</DsButton>
            </DsTooltip>
            <DsTooltip content="下方提示" placement="bottom">
              <DsButton variant="outline" level="neutral" size="small">Hover（Bottom）</DsButton>
            </DsTooltip>
          </SubSection>
        </Section>

        {/* ── Overlay ── */}
        <Section title="Overlay 遮罩">
          <SubSection label="Toggle">
            <DsButton variant="solid" level="primary" size="medium" onClick={() => setShowOverlay(true)}>
              顯示 Overlay
            </DsButton>
          </SubSection>
          {showOverlay && (
            <DsOverlay
              isTransparent={false}
              className="z-modal flex items-center justify-center cursor-pointer"
              onClick={() => setShowOverlay(false)}
            >
              <div className="bg-neutral-0 rounded-1 p-8 shadow-modal text-center" onClick={(e) => e.stopPropagation()}>
                <p className="text-ds-3 font-bold text-neutral-8 mb-4">Overlay 範例</p>
                <p className="text-ds-1 text-neutral-6 mb-6">點擊遮罩或按鈕關閉</p>
                <DsButton variant="solid" level="danger" size="medium" onClick={() => setShowOverlay(false)}>
                  關閉
                </DsButton>
              </div>
            </DsOverlay>
          )}
        </Section>
      </div>
    </EventLayout>
  )
}

export default Index
