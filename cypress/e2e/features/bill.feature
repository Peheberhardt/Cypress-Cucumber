Feature: Bill Feature

    Should validate bill page

    Background: Should do login
    Given I go to website
    When I fill the login and password with : "pedro@testes" and "pedrosenhas"
    And click on Login button
    Then I should be logged

    Scenario: Create new bill
        Given I go to bill page
        When I create a new bill
        Then the system should return : "Conta inserida com sucesso!"