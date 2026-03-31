# Snack Bar

## Usage
Provide brief feedback about an operation.
- **Non-interruptive**.
- **Location**: Bottom center (or bottom spanning full width on mobile).

## Anatomy
1.  **Text Label**: Max 2 lines. Clear, short.
2.  **Action Button (Optional)**: Max 1 button (e.g., "Undo"). Color distinct from text.
3.  **Container**: Rectangular, black/dark grey bg usually.

## Behavior
- **Duration**: Automatically disappears after **7 seconds**.
- **Dismissal**:
    - Page transition.
    - Clicking action button.
    - User clicks elsewhere (scrolling does NOT dismiss).
- **Click Actions**: Only action button is clickable. Text is not.

## Constraints
- Do not block other floating elements (FABs, etc).
