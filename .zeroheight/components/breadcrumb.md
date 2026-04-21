# Breadcrumb

**Link**: [Breadcrumb Documentation](https://zeroheight.com/8ei12wwuw/p/455648-breadcrumb)

## Usage
Shows location in site hierarchy and provides navigation to previous levels.
-   **Desktop Only**: Do NOT use on mobile (use Back button instead).

## Structure
1.  **Root**: First page link (Home).
2.  **Hierarchy Links**: Intermediate clickable pages.
3.  **Current Page**: Plain text, non-clickable (Gray 900).
4.  **Separator**: `>` symbol (Icon).

## States
-   **Enable**: Link color (Blue/Primary).
-   **Hover**: Underline/Color change.
-   **Active**: Pressed state.
-   **Active (Current Page)**: Plain text, no link.

## Specs
-   **Current Page Color**: Gray 900 (Neutral).
-   **Separator Icon**: Small chevron `>`.

## Dos & Don'ts
-   **Do**: Truncate long text with `...` and provide a tooltip.
-   **Do**: Keep every level clickable *except* the current one.
-   **Don't**: Use icons within the path texts (only use text labels).
-   **Don't**: Use on mobile views.
