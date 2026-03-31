# Number Picker

**Link**: [Number Picker Documentation](https://zeroheight.com/8ei12wwuw/p/8534fb-number-picker)

## Description
A control for selecting a number from a small range by clicking increase/decrease buttons.

## Structure
- **Subtract Button (-)**: Icon button to decrease value.
- **Input/Display**: Shows current number.
- **Add Button (+)**: Icon button to increase value.

## Usage
- **Best for**: Small ranges (e.g., 0-10, passengers, room counts).
- **Alternative**: Use **Number Input** for large ranges or free typing.

## Behaviors
- **Limits**:
    -   When `Min` is reached, the **Subtract** button becomes `Disabled`.
    -   When `Max` is reached, the **Add** button becomes `Disabled`.
- **Typing**: Generally, this component is often read-only or restrictive on direct typing (check implementation details, but standard behavior is button-driven).

## States
- **Enable**: Standard interactive state.
- **Disable**: Non-interactive.
