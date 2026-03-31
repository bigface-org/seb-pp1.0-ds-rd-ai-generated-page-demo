# Alert

**Link**: [Alert Documentation](https://zeroheight.com/8ei12wwuw/p/81e2bf-alert)

## Usage
**Interruptive** dialogs for critical info or blocking actions.
-   **Use for**:
    -   System errors.
    -   Critical information that requires acknowledgment.
    -   Confirmations for destructive actions.
-   **Don't use for**:
    -   Marketing messages.
    -   Optional information (use **Toast** or **Dialog** instead).

## Structure
1.  **Title** (Optional): Concise, bold description.
2.  **Content**: Clear explanation of the issue or task.
3.  **Buttons**:
    -   Max **2 buttons**.
    -   **Primary**: For main action.
    -   **Danger**: For destructive action.
    -   **Neutral**: For secondary/cancel action.
4.  **Container**: White background with overlay.

## Behavior
-   **Mandatory Interaction**: User cannot dismiss by clicking the background overlay (unlike some Modals).
-   Must interact with one of the buttons to proceed.

## Specifications
-   **Width**:
    -   **Web**: Fixed **320px**.
    -   **App**: Fluid width `100vw - 32px` (16px margin on each side).
-   **Padding**: 16px.
-   **Spacing**:
    -   Headline to Message: **8px**.
    -   Message to Buttons: **16px**.

## Dos & Don'ts
-   **Do**: Use Primary button for the main positive action.
-   **Do**: Use Danger button for irreversible actions (e.g., Delete).
-   **Do**: Use Primary + Neutral for binary choices (e.g., Save vs Cancel).
-   **Don't**: Use more than 2 buttons.
-   **Don't**: Use two Primary buttons (confusing hierarchy).
