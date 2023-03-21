Feature: Login page

    Scenario: Should Sign up
        Given I go to website
        When I fill the login and password with : "pedro@testes" and "pedrosenhas"
        And click on Login button
        Then I should be logged