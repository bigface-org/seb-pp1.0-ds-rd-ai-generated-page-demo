import { useState } from 'react'
import { DsButton } from '@/components/ds/DsButton'
import { DsTag } from '@/components/ds/DsTag'
import { DsBadge } from '@/components/ds/DsBadge'
import { DsBadgeRating } from '@/components/ds/DsBadgeRating'
import { DsAvatar } from '@/components/ds/DsAvatar'
import { DsAnnouncement } from '@/components/ds/DsAnnouncement'
import { DsTooltip } from '@/components/ds/DsTooltip'
import { DsOverlay } from '@/components/ds/DsOverlay'

/* ── Helpers ── */
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-14">
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

/* ── Color swatch ── */
const Swatch = ({ name, css, hex }: { name: string; css: string; hex?: string }) => (
  <div className="flex flex-col items-center gap-1">
    <div className="w-14 h-14 rounded-1 border border-neutral-3 shadow-01" style={{ backgroundColor: css }} />
    <span className="text-[11px] font-medium text-neutral-7">{name}</span>
    {hex && <span className="text-[10px] text-neutral-5">{hex}</span>}
  </div>
)

/* ── Typography row ── */
const TypoRow = ({ token, size, lh, weight, label }: { token: string; size: string; lh: string; weight: number; label: string }) => (
  <div className="flex items-baseline gap-4 py-2 border-b border-neutral-2">
    <span className="w-10 text-ds-0 font-bold text-primary-7">{token}</span>
    <span className="text-ds-0 text-neutral-5 w-28">{size} / {lh} / {weight}</span>
    <span style={{ fontSize: size, lineHeight: lh, fontWeight: weight }} className="text-neutral-8 truncate">
      {label}
    </span>
  </div>
)

/* ── Spacing block ── */
const SpacingBlock = ({ px }: { px: number }) => (
  <div className="flex items-center gap-2">
    <div className="bg-primary-4 rounded-[2px]" style={{ width: px, height: 20, minWidth: 2 }} />
    <span className="text-[11px] text-neutral-6 whitespace-nowrap">{px}px</span>
  </div>
)

/* ── Shadow card ── */
const ShadowCard = ({ name, token }: { name: string; token: string }) => (
  <div className="bg-neutral-0 rounded-1 p-4 flex flex-col items-center justify-center h-20 w-36" style={{ boxShadow: `var(${token})` }}>
    <span className="text-ds-0 font-medium text-neutral-7">{name}</span>
    <span className="text-[10px] text-neutral-5">{token}</span>
  </div>
)

const Index = () => {
  const [showOverlay, setShowOverlay] = useState(false)

  /* Color palettes */
  const palettes: { name: string; prefix: string; hexes: string[] }[] = [
    { name: 'Primary (Blue)', prefix: 'primary', hexes: ['#D9F2FF', '#B3E5FF', '#80CFEE', '#4DB8D9', '#269CC4', '#0F7AAB', '#006B99', '#004D80', '#003A5E', '#003A5E', '#002138'] },
    { name: 'Warning (Yellow)', prefix: 'warning', hexes: ['#FFF7CC', '#FFEA80', '#FFD91A', '#E6BF00', '#CCAA00', '#B38F00', '#997A00', '#806600', '#664D00', '#4D3D00'] },
    { name: 'Success (Green)', prefix: 'success', hexes: ['#F0FFF0', '#D4F5D4', '#A8E6A8', '#7ACC7A', '#50B350', '#009A00', '#008040', '#006030', '#004020', '#001A0D'] },
    { name: 'Danger (Orange-Red)', prefix: 'danger', hexes: ['#FFF3EB', '#FFD6B3', '#FFB880', '#FF9A4D', '#FF7C1A', '#F4511E', '#F4511E', '#B33C00', '#802B00', '#4D1A00'] },
    { name: 'Neutral (Grayscale)', prefix: 'neutral', hexes: ['#FFFFFF', '#F7F7F7', '#F2F2F2', '#E8E8E8', '#D9D9D9', '#BFBFBF', '#8C8C8C', '#595959', '#262626', '#000000'] },
    { name: 'Indigo', prefix: 'indigo', hexes: ['#ECF0F2', '#C7D1D6', '#A3B3BA', '#7F959E', '#6B8490', '#587382', '#4D6471', '#405360', '#33424E', '#253136'] },
    { name: 'Momo (Pink)', prefix: 'momo', hexes: ['#D94080', '#A32060', '#6B0040'] },
  ]

  return (
    <div className="min-h-screen bg-neutral-1">
      {/* Page header */}
      <header className="bg-neutral-0 border-b border-neutral-3 px-6 md:px-10 py-8">
        <h1 className="text-ds-6 font-bold text-neutral-9">Ark Design System</h1>
        <p className="text-ds-2 text-neutral-6 mt-2">Foundations & Component Library 展示頁面</p>
      </header>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-10">

        {/* ════════════ FOUNDATIONS ════════════ */}
        <div className="mb-16">
          <h2 className="text-ds-5 font-bold text-neutral-8 mb-8">Foundations 基礎規範</h2>

          {/* ── Colors ── */}
          <Section title="Colors 色彩">
            {palettes.map((p) => (
              <SubSection key={p.name} label={p.name}>
                {p.hexes.map((hex, i) => (
                  <Swatch key={i} name={`${p.prefix}-${i}`} css={hex} hex={hex} />
                ))}
              </SubSection>
            ))}
          </Section>

          {/* ── Typography ── */}
          <Section title="Typography 字型排版">
            <p className="text-ds-1 text-neutral-6 mb-4">
              字體：<strong>Noto Sans TC</strong> / Noto Sans&emsp;|&emsp;分為 Heading、Medium、Paragraph、Interface 四大語意層級
            </p>
            <SubSection label="Heading（Bold 700）">
              <div className="w-full space-y-0">
                <TypoRow token="H1" size="48px" lh="64px" weight={700} label="大標題 Heading 1" />
                <TypoRow token="H2" size="32px" lh="48px" weight={700} label="次標題 Heading 2" />
                <TypoRow token="H3" size="24px" lh="32px" weight={700} label="段落標題 Heading 3" />
                <TypoRow token="H4" size="20px" lh="28px" weight={700} label="小標題 Heading 4" />
                <TypoRow token="H5" size="16px" lh="24px" weight={700} label="輔助標題 Heading 5" />
                <TypoRow token="H6" size="14px" lh="20px" weight={700} label="最小標題 Heading 6" />
              </div>
            </SubSection>
            <SubSection label="Medium（Medium 500）">
              <div className="w-full space-y-0">
                <TypoRow token="M1" size="16px" lh="24px" weight={500} label="副標題 Medium 1" />
                <TypoRow token="M2" size="14px" lh="20px" weight={500} label="副標題 Medium 2" />
                <TypoRow token="M3" size="12px" lh="16px" weight={500} label="副標題 Medium 3" />
              </div>
            </SubSection>
            <SubSection label="Paragraph（Regular 400）">
              <div className="w-full space-y-0">
                <TypoRow token="P1" size="16px" lh="24px" weight={400} label="內文段落 Paragraph 1（Desktop Body 預設）" />
                <TypoRow token="P2" size="14px" lh="20px" weight={400} label="內文段落 Paragraph 2（Mobile Body 預設）" />
                <TypoRow token="P3" size="12px" lh="16px" weight={400} label="輔助文字 Paragraph 3" />
              </div>
            </SubSection>
            <SubSection label="Interface（Bold 700）">
              <div className="w-full space-y-0">
                <TypoRow token="I1" size="16px" lh="24px" weight={700} label="介面文字 Interface 1" />
                <TypoRow token="I2" size="14px" lh="20px" weight={700} label="介面文字 Interface 2" />
                <TypoRow token="I3" size="12px" lh="16px" weight={700} label="介面文字 Interface 3" />
              </div>
            </SubSection>
            <SubSection label="Tailwind Token 對照">
              <div className="w-full overflow-x-auto">
                <table className="w-full text-ds-0 text-neutral-7">
                  <thead>
                    <tr className="border-b border-neutral-3 text-left">
                      <th className="py-2 pr-4 font-medium">Class</th>
                      <th className="py-2 pr-4 font-medium">Size</th>
                      <th className="py-2 font-medium">Line Height</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['text-ds-0', '12px', '16px'],
                      ['text-ds-1', '14px', '20px'],
                      ['text-ds-2', '16px', '24px'],
                      ['text-ds-3', '20px', '28px'],
                      ['text-ds-4', '24px', '32px'],
                      ['text-ds-5', '32px', '40px'],
                      ['text-ds-6', '48px', '64px'],
                    ].map(([cls, sz, lh]) => (
                      <tr key={cls} className="border-b border-neutral-2">
                        <td className="py-1.5 pr-4 font-mono text-primary-6">{cls}</td>
                        <td className="py-1.5 pr-4">{sz}</td>
                        <td className="py-1.5">{lh}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SubSection>
          </Section>

          {/* ── Spacing ── */}
          <Section title="Spacing 間距">
            <p className="text-ds-1 text-neutral-6 mb-4">以 8px 為基準，搭配 4px 做微調</p>
            <SubSection label="8px 基準">
              <div className="w-full flex flex-wrap gap-4">
                {[8, 16, 24, 32, 40, 48, 56, 64, 72, 80].map(px => <SpacingBlock key={px} px={px} />)}
              </div>
            </SubSection>
            <SubSection label="4px 微調">
              <div className="w-full flex flex-wrap gap-4">
                {[4, 12, 20, 28].map(px => <SpacingBlock key={px} px={px} />)}
              </div>
            </SubSection>
          </Section>

          {/* ── Layout & Breakpoints ── */}
          <Section title="Layout 佈局 & Breakpoints 斷點">
            <SubSection label="Grid System">
              <div className="w-full text-ds-1 text-neutral-7 space-y-1">
                <p>12 欄位網格系統</p>
              </div>
            </SubSection>
            <SubSection label="Responsive Breakpoints">
              <div className="w-full overflow-x-auto">
                <table className="w-full text-ds-0 text-neutral-7">
                  <thead>
                    <tr className="border-b border-neutral-3 text-left">
                      <th className="py-2 pr-4 font-medium">Token</th>
                      <th className="py-2 pr-4 font-medium">Value</th>
                      <th className="py-2 pr-4 font-medium">Gutter</th>
                      <th className="py-2 font-medium">Margin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['sm', '576px', '8px', '8px'],
                      ['md', '768px', '16px', '16px'],
                      ['lg', '1024px', '16px', '16px'],
                      ['xl', '1280px', '24px', '24px'],
                    ].map(([tk, val, gut, mar]) => (
                      <tr key={tk} className="border-b border-neutral-2">
                        <td className="py-1.5 pr-4 font-mono text-primary-6">{tk}</td>
                        <td className="py-1.5 pr-4">{val}</td>
                        <td className="py-1.5 pr-4">{gut}</td>
                        <td className="py-1.5">{mar}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SubSection>
          </Section>

          {/* ── Shadows ── */}
          <Section title="Shadows 陰影">
            <SubSection label="Elevation Levels">
              <div className="flex flex-wrap gap-4 bg-neutral-2 p-6 rounded-1">
                <ShadowCard name="Shadow 01" token="--shadow-01" />
                <ShadowCard name="Shadow 02" token="--shadow-02" />
                <ShadowCard name="Shadow 03" token="--shadow-03" />
              </div>
            </SubSection>
            <SubSection label="Component Shadows">
              <div className="flex flex-wrap gap-4 bg-neutral-2 p-6 rounded-1">
                {[
                  ['Card', '--shadow-card'],
                  ['Card Hover', '--shadow-card-hover'],
                  ['Dropdown', '--shadow-dropdown'],
                  ['Navigation', '--shadow-navigation'],
                  ['Header', '--shadow-header'],
                  ['Modal', '--shadow-modal'],
                  ['Dialog', '--shadow-dialog'],
                ].map(([name, token]) => (
                  <ShadowCard key={token} name={name} token={token} />
                ))}
              </div>
            </SubSection>
          </Section>

          {/* ── Z-Index ── */}
          <Section title="Z-Index 層級">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-ds-0 text-neutral-7">
                <thead>
                  <tr className="border-b border-neutral-3 text-left">
                    <th className="py-2 pr-4 font-medium">Component</th>
                    <th className="py-2 pr-4 font-medium">Z-Index</th>
                    <th className="py-2 font-medium">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Dropdown', '1000', 'Select menus, popovers'],
                    ['Navigation', '1010', 'Sub navigation bars'],
                    ['Sticky Header', '1020', 'Page navigation'],
                    ['Bulletin', '1030', 'Bulletin boards'],
                    ['Flash Notice', '1040', 'Status notifications'],
                    ['Mask', '1050', 'Background overlay for modals'],
                    ['Modal', '1060', 'Critical interaction windows'],
                    ['Dialog', '1070', 'High-priority alerts'],
                  ].map(([comp, z, use]) => (
                    <tr key={comp} className="border-b border-neutral-2">
                      <td className="py-1.5 pr-4 font-medium">{comp}</td>
                      <td className="py-1.5 pr-4 font-mono text-primary-6">{z}</td>
                      <td className="py-1.5">{use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          {/* ── Border Radius ── */}
          <Section title="Border Radius 圓角">
            <SubSection label="Tokens">
              <div className="flex flex-wrap gap-4">
                {[
                  ['4px', '4px'],
                  ['8px', '8px'],
                  ['16px', '16px'],
                  ['20px', '20px'],
                  ['24px', '24px'],
                  ['Full', '9999px'],
                ].map(([label, val]) => (
                  <div key={label} className="flex flex-col items-center gap-1">
                    <div
                      className="w-16 h-16 bg-primary-4 border-2 border-primary-6"
                      style={{ borderRadius: val }}
                    />
                    <span className="text-[11px] font-medium text-neutral-7">{label}</span>
                  </div>
                ))}
              </div>
            </SubSection>
          </Section>

          {/* ── Writing Formats ── */}
          <Section title="Writing Formats 書寫規範">
            <div className="space-y-3 text-ds-1 text-neutral-7">
              <p>✅ 中英文之間需加入 <strong>半形空格</strong>：<span className="font-mono bg-neutral-2 px-1 rounded">AsiaYo 提供最優質...</span></p>
              <p>✅ 中文數字之間需加入半形空格：<span className="font-mono bg-neutral-2 px-1 rounded">超過 60,000 多間...</span></p>
              <p>⚠️ 全形標點符號旁不加空格：<span className="font-mono bg-neutral-2 px-1 rounded">下載 AsiaYo 的 App，使用...</span></p>
              <p>📌 中文冒號使用全形 <code className="bg-neutral-2 px-1 rounded">：</code>，英文使用半形 <code className="bg-neutral-2 px-1 rounded">:</code></p>
            </div>
          </Section>
        </div>

        {/* ════════════ COMPONENTS ════════════ */}
        <div>
          <h2 className="text-ds-5 font-bold text-neutral-8 mb-8">Components 元件庫</h2>

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
      </div>
    </div>
  )
}

export default Index