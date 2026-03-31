# Pagination

**Link**: [Pagination Documentation](https://zeroheight.com/8ei12wwuw/p/653285-button) (Note: Verify URL, extracted via Search)

## Usage
Split large amounts of content into multiple pages to improve load time and navigation.

## Ecosystem
-   **Desktop** (>= 375px): Max **7** items visible.
-   **Mobile** (< 375px): Max **5** items visible.

## Anatomy
1.  **Page Numbers**: Direct links to specific pages.
2.  **Navigation Controls**: Previous and Next buttons.
3.  **Truncation**: `...` used when page count exceeds the maximum visible items.

## Behaviors
-   **Single Truncation**: `1 ... 5 6 7 8 9` (Start truncated).
-   **Double Truncation**: `1 ... 10 11 12 ... 50` (Middle range).
-   **State**: Current page is highlighted (Blue/Primary).

## Dos & Don'ts
-   **Do**: Use for long lists like Search Results.
-   **Do**: Keep "Previous" and "Next" buttons always visible (disable if at start/end).
