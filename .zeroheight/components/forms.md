# Form

## 1. Text Field
**Link**: [Text Field Tab](https://zeroheight.com/8ei12wwuw/p/04bfc5-form-/t/38ed44)

### Specs / Structure
- **Label**: Title of the input field.
- **Prefix Icon (Optional)**: Used for search or specific indicators.
- **Input Area**: Contains default content or user input.
- **Suffix Icon (Optional)**: clear buttons or status indicators.
- **Feedback/Example Text**: Located below the input for guidance or error messages.

### States
- **Placeholder**: Grey text prompting input.
- **Default**: Standard border and background.
- **Focus**: Highlighted border (usually primary color).
- **Error**: Red border + Error message text.
- **Warning**: Yellow/Orange border + Warning message.
- **Success**: Green border/Icon.
- **Disable**: Greyed out, non-interactive.

### Rules / Behaviors
- **Debounce**: During search input, the prefix icon may switch to a loading state. 600ms delay recommended for real-time validation.
- **Text Overflow**:
    - Input text is truncated with `...` when it exceeds width.
    - On focus, the cursor moves to the end.
- **Feedback Text Overflow**: Text wraps to the next line if it exceeds the width.

---

## 2. Dropdown
**Link**: [Dropdown Tab](https://zeroheight.com/8ei12wwuw/p/04bfc5-form-/t/993852)

### Specs / Structure
- **Label**: Title.
- **Prefix Icon (Optional)**: Visual helper.
- **Selection Value**: Current selected text.
- **Chevron Icon**: Indicates expand/collapse state.
- **Feedback/Example Text**: Helper text below.

### States
- **Placeholder**: "Select option".
- **Default**: Standard state.
- **Active / Focus**: Dropdown list is open (Chevron rotates).
- **Error**: Red indication.
- **Warning**: Yellow indication.
- **Disable**: Non-interactive.

### Rules / Behaviors
- **Text Overflow**: Selected values are truncated with `...` if too long.

---

## 3. Phone Input
**Link**: [Phone Input Tab](https://zeroheight.com/8ei12wwuw/p/04bfc5-form-/t/629002)

### Specs / Structure
1. **Label**: Field title.
2. **Area Code Selector**:
    - Country Flag
    - Country Code (e.g., +886)
    - Chevron (for selection)
3. **Vertical Divider**: Separates code from number.
4. **Input Field**: For the main phone number.
5. **Feedback Text**: Error or guidance.

### States
- **Placeholder**: E.g., "000-000-000".
- **Default**: Normal state.
- **Focus**: Active typing state.
- **Error**: Validation failure.

---

## 4. Text Area
**Link**: [Text Area Tab](https://zeroheight.com/8ei12wwuw/p/04bfc5-form-/t/865239)

### Specs / Structure
- **Label**: Field title.
- **Multi-line Input Area**: Resizable or auto-expanding.
- **Character Count (Optional)**: Bottom right (e.g., 0/200).
- **Feedback Text**: Below the box.

### States
- **Placeholder**, **Default**, **Focus**, **Error**.
- **Min Height**: Typically 76px.
- **Auto-expand**: Grows vertically with content (no scrollbar) is a common pattern.

---

## 5. From Removal
**Link**: [Removal Tab](https://zeroheight.com/8ei12wwuw/p/04bfc5-form-/t/343015)

### Specs / Structure
- **Container**: A group containing one or more input components (Text Field, Dropdown, etc.).
- **Remove Button**: Trash icon, typically aligned to the right or top-right.

### Behaviors
- Allows users to dynamically remove a specific set of fields from a list.
- **Condition**: "Remove" button usually only appears if >1 item exists (to prevent removing the last required field).

### Rules
- **Spacing**: Maintain a minimum vertical spacing (e.g., 16px) between input groups.

---

## 6. Checkbox
**Link**: [Checkbox Tab](https://zeroheight.com/8ei12wwuw/p/04bfc5-form-/t/050160)

### Specs / Structure
- **Checkbox Box**: The square indicator.
- **Item Text**: The label associated with the box.

### States
- **Default (Unselected)**: Empty box.
- **Selected (Checked)**: Filled with checkmark.
- **Indeterminate**: Dash or mixed state (for parent categories).
- **Disable**: Greyed out.
- **Error**: Red outline.
- **Usage**: Single or multiple selection.

---

## 7. Radio Button
**Link**: [Radio Button Tab](https://zeroheight.com/8ei12wwuw/p/04bfc5-form-/t/025281)

### Status
- **Content**: Marked as "尚未撰寫" (Not yet written) in the design system docs.
- **Standard Usage**: Circular selection for single-choice lists.

---

## Validation Summary
- **On Blur**: Triggers validation after user leaves the field.
- **Debounce**: 600ms delay for real-time checks.
- **Submission**: Checks all fields, scrolls to first error.
