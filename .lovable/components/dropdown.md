# Dropdown (Select)

**Link**: [Select Documentation](https://zeroheight.com/8ei12wwuw/p/653285-button) (Note: Verify URL, extracted via Search)

## Usage
Native-style selection menus using the `<select>` tag. Used when users must choose one option from a list.

## States
1.  **Required with Default**: Pre-selected value shown (e.g. Country: "Taiwan").
2.  **Required with Placeholder**: "Please select" text shown initially.
3.  **Disabled**: Gray background, not-allowed cursor, unresponsive.

## Behavior
-   **Irreversibility**: Once a selection is made, users cannot revert to the "empty" placeholder state (native behavior).
-   **Interaction**: Opens system-native picker (Mobile) or browser-native dropdown (Desktop).

## Dos & Don'ts
-   **Do**: Use placeholders ("Please select") when no safe default exists.
-   **Do**: Use disabled state when the field relies on a previous input (e.g. City field disabled until Country selected).
-   **Don't**: Create custom dropdowns if native `<select>` suffices for accessibility and mobile support.
