# Layout

**Link**: [Layout Documentation](https://zeroheight.com/8ei12wwuw/p/21b6b5-layout)

## Page & Grid
- **Columns**: 12-column grid system.
- **Responsive Settings**:
    -   **Desktop (≥ 1280px)**: Gutter 24px, Margin 24px.
    -   **Mini-Tablet (< 1024px)**: Gutter 16px, Margin 16px.
    -   **Mobile (< 768px)**: Gutter 8px, Margin 8px.
- **Templates**: "List template" (for Cruise, GIT, THSR lists) is in Design phase.

## Breakpoints (SCSS)
- `$breakpoint-sm`: 576px
- `$breakpoint-md`: 768px
- `$breakpoint-lg`: 1024px
- `$breakpoint-xl`: 1280px

## Space (Spacing Scale)
- **8px Base**: 8, 16, 24, 32, 40, 48, 56, 64, 72, 80 px.
- **4px Base**: 4, 12, 20, 28 px (for fine tuning).

## Elevation (Z-Index & Shadows)
| Component | Z-Index | Shadow | Use Case |
| :--- | :--- | :--- | :--- |
| **Dropdown** | 1000 | Elevation Style | Select menus, popovers |
| **Sticky Header** | 1020 | None | Page navigation |
| **Toast** | 1050 | Elevation Style | Status notifications |
| **Mask** | 2000 | None | Background overlay for modals |
| **Modal** | 2010 | Elevation Style | Critical interaction windows |
| **Dialog** | 2020 | Elevation Style | High-priority alerts |
| **Tooltip** | Parent* + N | None | Brief info on hover/click |
