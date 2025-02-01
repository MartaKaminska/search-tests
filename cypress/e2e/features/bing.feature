Feature: Search in Bing browser
    Verification of search results for Bing search according to the given phrase

    Background: User in browser search
        Given navigate to "www.bing.com"
        And reject the cookie policy for Bing

    Scenario Outline: Search for "phrase" with "Everything" filter
        When type <phrase> into the search bar in Bing
        And press Enter in Bing
        Then there should be some search results that are relevant to <phrase>
        And there should be a link with the <title>
        And there should be information with the address <address> in the side panel

    Examples:
        | phrase  | address                                    | title                                    |
        | semrush | 800 Boylston St Ste 2475, Boston, MA 02199 | Semrush - Online Marketing Can Be Easy   |

    Scenario Outline: Search for "phrase" with "Videos" filter
        When type <phrase> into the search bar in Bing
        And press Enter in Bing
        And select the "Videos" filter
        Then a new browser tab should open
        And there should be video results related to "<phrase>"

    Examples:
        | phrase |
        | semrush |

    Scenario Outline: Search for "phrase" with "News" filter
        When type <phrase> into the search bar in Bing
        And press Enter in Bing
        And select the "News" filter
        Then a new browser tab should open
        And there should be a message indicating no results found for <phrase>

    Examples:
        | phrase |
        | semrush |