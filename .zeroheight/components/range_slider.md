# Range Slider

**Link**: [Range Slider Documentation](https://zeroheight.com/8ei12wwuw/p/440a19-range-slider)

## Description
Allows users to select a value or range of values from a continuous or discrete set.

## Structure
- **Track**:
    -   **Inactive Track**: Grey background representing total range.
    -   **Active Track**: Colored portion representing selected range.
- **Handle**: Draggable circle(s) to set values.
- **Labels (Optional)**:
    -   **Price/Value**: Displays current value above/near the handle.
    -   **Max Indication (+)**: Shows if the value exceeds the max displayable range.

## Behaviors
- **Interaction**:
    -   **Drag**: Slide handle to change value.
    -   **Click**: Click on track to jump handle to that position.
    -   **Keyboard**: Tab to focus handle, Left/Right arrows to adjust.
- **Constraint (Double Slider)**:
    -   **Overlap**: Handles can overlap (same value).
    -   **Crossing**: Handles **cannot cross** each other (Left handle cannot be > Right handle).
    -   **Response**: Changes must be immediate (no latency).

## States
1.  **Enable**: Arrow cursor, Normal handle size.
2.  **Hover**: `Grab` cursor, Handle changes color/brightness.
3.  **Active (Dragging)**: `Grabbing` cursor, Handle has **Outer Glow**.
4.  **Focus**: Visible focus ring/glow (via keyboard or click).

## Usage
- **Context**: Often used in **Advanced Search** filters (e.g., Price range, filter by score).
- **Views**:
    -   **Desktop**: Sidebar or dropdown filters.
    -   **Mobile**: Bottom sheet or full-screen filter views.

## Do's & Don'ts
- **Do**: Use for qualitative values or approximate selections (e.g., volume, brightness, price range).
- **Don't**: Use for extremely precise data entry where a specific integer is required (use an Input field instead).

## Specs
- **Spacing**:
    -   Price/Value label width: Variable based on content.
    -   **Handle**: 12px overhang (center of handle aligns with track end).
- **Dimensions**:
    -   **Track Height**: Typically 4px (check Figma).
    -   **Handle Size**: Typically 24px x 24px (touch target) with visible knob.
- **Placement**:
    -   Handle center aligns with the track ends.
