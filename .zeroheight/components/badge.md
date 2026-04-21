# Badge

**Link**: [Badge Documentation](https://zeroheight.com/8ei12wwuw/p/49aa5a-badge)

## Categories
1.  **New Feature**
2.  **Numeric**
3.  **Rating** (Score)

---

## 1. New Feature
### Types
-   **Badge (Text)**: E.g., "新" (TW/HK/JP) or "N" (EN/KR).
-   **Dot**: Red spot (with Ripple effect) for subtle notifications.

### Placement
-   **At the edge**: Overlaps the corner of the parent element (e.g., icon).
-   **Close to edge**: Positioned near the element (common in lists/nav bars).

### Behavior
-   **New User**: Sees badge until interaction.
-   **Existing User**: Logic depends on feature rollout strategy.

### Dos & Don'ts
-   **Do**: Add a white border to the **Dot** to separate it from the background icon.

---

## 2. Numeric
### Styles
-   **Danger 06** (Red): Urgent notifications / Unread messages.
-   **Primary 08** (Blue): Informational counts (e.g., Filters applied).
-   **Neutral 01** (Grey): For dark backgrounds.

### Placement
-   **At the edge**: Top-right corner of icons.
-   **Side by side**: Next to text labels (e.g., "Reviews (5)").

---

## 3. Rating
### Structure
-   **Score**: Always **1 decimal place** (e.g., 4.5).
-   **Divider**: Vertical line.
-   **Total Score**: Max 5.
-   **Grading Text**: Text description (Excellent, Good, etc.).
-   **Comment Count**: Total number of reviews.

### Grading Standards
| Score Range | Grade Text |
| :--- | :--- |
| **4.5 - 5.0** | Excellent |
| **4.0 - 4.4** | Good |
| **3.0 - 3.9** | Average |
| **2.0 - 2.9** | Poor |
| **1.0 - 1.9** | Very Poor |

### Dos & Don'ts
-   **Do**: Ensure the grading text matches the score range exactly.
-   **Do**: Always keep the decimal place (e.g. "4.0" not "4").
