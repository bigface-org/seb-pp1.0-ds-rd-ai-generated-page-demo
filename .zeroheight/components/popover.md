# Popover

**Link**: [Popover Documentation](https://zeroheight.com/8ei12wwuw/p/445c0a-popover)

## Description
A floating container triggered by a user action that displays information or interactive content.

## Structure
- **UI Trigger**: The element (Icon or Button) that toggles the popover.
- **Container**: The box containing the content.
- **Header (Optional)**: Title text.
- **Body**: Main content text.
- **Link (Optional)**: Navigation to other pages.
- **Image (Optional)**: Visual support.

## Behaviors
- **Opening**:
    -   Triggered by **Clicking** the UI Trigger.
    -   Trigger stays in `Focus` state while popover is open.
- **Closing**:
    -   Closes when **clicking anywhere outside** the popover.
    -   Trigger returns to `Default` state.
- **Overflow**:
    -   **No Scroll Bars**: Content inside the popover is NOT allowed to scroll.
    -   If content exceeds the max height/width, it is **clipped** (`hidden`).
- **Positioning**: Automatically calculates best position (top/bottom/left/right) relative to the trigger.

## States
1.  **Default**: Popover hidden, Trigger is normal.
2.  **Focus**: Popover visible, Trigger is highlighted.
