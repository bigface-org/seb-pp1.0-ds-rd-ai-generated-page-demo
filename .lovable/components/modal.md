# Modal & Dialog

**Link**: [Modal Page](https://zeroheight.com/8ei12wwuw/p/45e406-modal)

## 1. Modal
**Tab**: Modal

### Description
Creates a new view for user tasks or information that requires interrupting the current flow without navigating to a new page.

### Structure
- **Header**:
    -   **Title**: Short, matches the trigger button.
    -   **Close Button**: 'X' icon to dismiss.
- **Body**:
    -   Content area.
    -   **Scroll**: Auto-scrolling if content exceeds max-height.
- **Footer (Bottom)**:
    -   **Action Buttons**: 1–3 buttons (Primary, Secondary, Tertiary).
    -   Align right typically.

### Behavior
- **Overlay**: Background is dimmed/blurred.
- **Closing**:
    -   Clicking 'X'.
    -   Clicking background overlay (usually).
    -   Clicking 'Cancel' button.
- **Scroll Lock**: Background content (page) cannot be scrolled while modal is open.
- **Singularity**: Only one modal should be shown at a time.

---

## 2. Dialog
**Tab**: Dialog

### Description
Medium-priority auxiliary tasks or info. Currently used mainly in **App** views or for simple confirmations (Alerts).

### Structure
- **Image (Optional)**: Top visual.
- **Title**: Bold, centered or left-aligned.
- **Text**: Description message.
    -   *Note*: Can use Title-only or Text-only depending on length.
- **Buttons**:
    -   1–3 Action buttons.
    -   Vertical or Horizontal layout depending on width.

### Behavior
- **Centering**: Always centered on screen.
- **Blocking**: **Cannot** be closed by clicking the overlay. Requires explicit button interaction (e.g., "OK", "Cancel") to ensure the user acknowledges the message.
- **Usage**: Confirmations (Delete?), Warnings, Important notices.

---

## Comparison
| Feature | Modal | Dialog |
| :--- | :--- | :--- |
| **Content** | Complex (Forms, lists, extensive text) | Simple (Message, confirmation) |
| **Dismissable** | Yes (Overlay click) | No (Must click button) |
| **Close Icon** | Yes (Header) | No (Usually) |
| **Use Case** | Tasks, Workflows | Alerts, Confirmations |
