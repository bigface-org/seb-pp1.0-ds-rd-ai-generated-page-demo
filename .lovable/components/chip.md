# Chip

**Link**: [Chip Documentation](https://zeroheight.com/8ei12wwuw/p/09de7e-chip)

## Usage
Compact elements that represent entered information, attributes, or actions.
Commonly used for filters.

## Structure
1.  **Container**: Pill shape.
2.  **Label**: Text (Filter name).
3.  **Close Icon**: 'x' icon to remove.

## States
-   **Enable**: Default state.
-   **Hover**: Background darken/border change. **Desktop Only**.
-   **Active**: Pressed.
-   **Focus**: Keyboard focus ring.

## Behavior
-   **Wrapping**: If multiple chips exceed the container width, they should wrap to the next line.
-   **Truncation**: 
    -   **Max Width**: **300px**.
    -   If text > 300px, truncate with ellipsis `...`.
-   **Text Wrapping**: Do **NOT** allow text within a single chip to wrap to a second line.

## Specs
-   **Height**: Typically 32px (Small) or 40px (Medium). matches Button naming often.

## Dos & Don'ts
-   **Do**: Use for active filters.
-   **Do**: clear/remove the chip immediately upon clicking the 'x'.
-   **Don't**: Allow chip text to wrap lines inside the chip.
