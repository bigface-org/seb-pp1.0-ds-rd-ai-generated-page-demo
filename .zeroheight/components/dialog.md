# Dialog (Modal)

**Link**: [Modal Documentation](https://zeroheight.com/8ei12wwuw/p/653285-button) (Note: Verify URL, extracted via Search)

## Usage
Used for notifications, decisions, or specific tasks without leaving the current page.

## Types
1.  **Modal (Full View)**
    -   **Usage**: Complex tasks, forms, or detailed information.
    -   **Structure**:
        -   **Header**: Title (matches trigger) + Close/Back button.
        -   **Body**: Content/Form.
        -   **Footer**: Up to 3 actions (Primary, Secondary, Tertiary).
    -   **Behavior**: Overlay click usually closes it. Background locked.

2.  **Dialog (Centered Alert)**
    -   **Usage**: Medium priority auxiliary tasks or alerts (App specific primarily).
    -   **Structure**: Image (Optional) + Title + Body + Buttons (1-3).
    -   **Behavior**: User **CANNOT** close by clicking overlay. Must interact with buttons.

## Specs
-   **Overlay**: Darkens background content. Body scroll disabled.
-   **Animation**: Fade in/scale up typically.

## Dos & Don'ts
-   **Do**: Use **Modal (Full View)** for primary tasks like Date Selection.
-   **Do**: Use **Dialog** for critical alerts where user acknowledgement is required.
-   **Don't**: Use **Dialog** for complex forms (use Modal).
