Feature: Search in Google browser
    Verification of search results for Google search according to the given phrase

    Background: User in browser search
        Given navigate to "www.google.com"
        And reject cookie policy for Google

    Scenario Outline: Search for "phrase" without applying a date filter
        When type <phrase> into the search bar in Google
        And press Enter in Google
        Then there should be some search results that are relevant to <phrase>
        And there should be a <phrase> result in the sponsored category
        And there should be information with the address <address> in the side panel

    Examples:
            | phrase | address                                                  |
            | prowly | Antoniego Józefa Madalińskiego 71/1, 02-549 Warszawa     |

    Scenario Outline: Search for "phrase" with a date filter "Past 24 hours"
        When type <phrase> into the search bar in Google
        And press Enter in Google
        And filter results by date from "Past 24 hours"
        Then there should be results from the "Past 24 hours"

    Examples:
            | phrase |
            | prowly |

    Scenario Outline: Search for "phrase" with a custom date filter
        When type <phrase> into the search bar in Google
        And press Enter in Google
        And filter results by date from <from date> to <to date>
        Then there should be <no> results from <from date> to <to date>

    Examples:
            | phrase | no    | from           | to          |
            | prowly | 16900 | 12/12/2024     | 12/13/2024  |