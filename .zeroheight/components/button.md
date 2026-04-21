# Button

**Link**: [Button Documentation](https://zeroheight.com/8ei12wwuw/p/653285-button)

## Usage
Buttons trigger actions or operations.
-   **General Button**: Text-based, optional icon.
-   **Icon Button**: Icon-only.
-   **Web Font Button**: Specialized circular button using web fonts.

## 1. General Button
### Types
-   **Primary**: Solid color. Main CTA.
-   **Secondary/Neutral**: Outline or lighter background.
-   **Ghost/Flat**: No background. For auxiliary actions (Cancel).
-   **Link**: Text with underline (Navigation). note: Flat Button != Link.

### Shapes
-   **Rounded**: Standard.
-   **Pill**: Fully rounded.
-   **Flat**: Borderless.

### Sizes
-   **Large**: 56px.
-   **Medium**: 40px.
-   **Small**: 32px.
-   **Extra Small**: 24px (rare/contextual).

### States
-   **Regular**, **Hover**, **Active**, **Focus**, **Disabled**.
-   **Loading**: Shows spinner/loader. Used when feedback is delayed.

## 2. Icon Button
### Usage
-   When icon alone conveys meaning (Search, Share).
### Styles
-   **Rounded**: Square-ish.
-   **Circular**: FAB style.
-   **Flat**: No border.

## 3. Web Font Button
-   Circular button using a specific web font icon.
-   **Usage**: Floating actions, specific UI controls.

## Dos & Don'ts
-   **Do**: Use **Loading State** for async actions.
-   **Do**: Label concisely (Action + Object, e.g. "Save", "Create Account").
-   **Don't**: Use generic labels like "Click Here".
-   **Don't**: Use **Flat Button** for navigation (Use **Link** instead).
-   **Don't**: Use **Link** for actions (Use **Flat Button** instead).
