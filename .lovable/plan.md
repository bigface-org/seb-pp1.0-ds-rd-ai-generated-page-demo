

## HeroBanner 加入左右滑動功能

將頂部 Banner 從純自動輪播改為支援使用者手動左右滑動（拖曳/觸控滑動）。

### 實作方式

使用專案中已有的 **Embla Carousel** 套件（已用於 `src/components/ui/carousel.tsx`），替換 HeroBanner 現有的手動 opacity 切換邏輯。

### 變更檔案

**`src/components/activity/HeroBanner.tsx`**
- 引入 `useEmblaCarousel` 和 `Autoplay` plugin
- 用 Embla 的 `ref` 和 slide 結構替換現有的 `img` 堆疊 + opacity 切換
- 自動輪播保留（5 秒），使用者拖曳時暫停
- 底部圓點指示器改為讀取 Embla 的 `selectedScrollSnap`，點擊時呼叫 `scrollTo`
- 支援桌面拖曳與行動裝置觸控滑動

