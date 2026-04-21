# Date Picker

**Link**: [Date Picker Documentation](https://zeroheight.com/8ei12wwuw/p/653285-button) (Note: Verify URL, extracted via Search)

## Usage
Used within a modal for selecting check-in and check-out dates.

## Ecosystem
-   **Desktop**:
    -   Displays year/month navigation and a full calendar grid.
    -   Bottom bar displays selected date range and "Total N nights".
-   **Mobile**:
    -   Scrollable list of months (vertical scroll).
    -   Sticky bottom bar for actions (Skip, Next step) and date summary.

## Structure (Desktop)
1.  **Header**: Month/Year + Navigation arrows.
2.  **Grid**: Days of the week + Dates.
3.  **Footer**: Dynamic summary (e.g. "Jun 10 - Jun 15 (5 nights)").

## Behavior
-   **Selection Logic**:
    1.  **First Click**: Sets Start Date (Check-in).
    2.  **Hover**: Highlights potential range (Desktop).
    3.  **Second Click**: Sets End Date (Check-out).
-   **Reset**: Clicking the *same* start date again resets the selection.
-   **Validation**: "Next" button (if present) is disabled until a valid range is selected.

## States
-   **In-Stock**: Standard available date.
-   **Today**: Highlighted/Bolded.
-   **Out-of-Stock**: Grayed out, disabled, not clickable.
-   **Selected Range**:
    -   **Start/End Caps**: Solid primary color.
    -   **Range**: Lighter opacity primary color.

## Dos & Don'ts
-   **Do**: Use the mobile-specific vertical scroll view for mobile devices.
-   **Do**: Clearly indicate the "Total Nights" count in the footer.
-   **Don't**: Allow selection of out-of-stock dates.
