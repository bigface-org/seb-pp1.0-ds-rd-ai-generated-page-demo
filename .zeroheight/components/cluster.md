# Cluster

**Link**: [Cluster Documentation](https://zeroheight.com/8ei12wwuw/p/355325-cluster)

## Usage
Displays density of properties/items in a map area to prevent pin overlap.
-   **Visibility**: Appears at specific low-zoom levels (e.g. 1/1000m).
-   **Interaction**: Clicking zooms the map to disperse the cluster into individual pins.

## Structure
-   **Shape**: Circle.
-   **Content**: Number count.

## Sizing Logic
1.  **Small**: Count < 10 (e.g., "5").
2.  **Medium**: 10 <= Count <= 60 (e.g., "24").
3.  **Large**: Count > 60. Displays as **"60+"**.

## Specs
-   **Shape**: Always circular.
-   **Resize**: Do NOT change shape based on content length.

## Dos & Don'ts
-   **Do**: Ensure actual map pins (if visible) are layered *beneath* clusters if they overlap.
-   **Do**: Follow alignment rules when multiple clusters are near each other.
