# Avatar

**Link**: [Avatar Documentation](https://zeroheight.com/8ei12wwuw/p/01820d-avatar)

## Usage
Represents specific entities (users, organizations) using thumbnails.
-   **Web**: Used in host promotion sections.
-   **App**: Used in member profiles/lists.

## Styles
1.  **Image**: User-uploaded photo.
2.  **Acronym**: Initials on a colored background.
    -   Background: Randomly assigned from **5 colors**.
    -   Text: White.
3.  **Placeholder**: Default gray head icon (used if no photo & no name known, e.g. "Deleted User").

## Sizes
Total **7 Sizes** (4px increment):
-   **56px** (Font: 24px)
-   **52px** (Font: 22px)
-   **48px** (Font: 20px)
-   **44px** (Font: 18px)
-   **40px** (Font: 16px)
-   **36px** (Font: 16px)
-   **32px** (Font: 16px)

## Logic (Acronym)
-   **Registered User**:
    -   Take the **first character** of the **First Name**.
    -   Support CJK and English.
-   **Length**: Maximum 1 character.

## Dos & Don'ts
-   **Do**: Use "Acronym" style if user has a name but no photo.
-   **Don't**: Display "Deleted User" with an Acronym; use Placeholder.
-   **Don't**: Use more than 1 character for the acronym.
