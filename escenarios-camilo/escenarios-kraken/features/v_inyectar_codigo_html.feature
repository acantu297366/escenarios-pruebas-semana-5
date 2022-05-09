Feature: Opciones

@user1 @web
Scenario: Inyectar código HTML
    Given I wait
    Then I Navigate to page "<LOGIN_PAGE>"
    Then I wait for 2 seconds
    Then I enter login email "<EMAIL>"
    Then I wait for 2 seconds
    Then I enter login password "<PASSWORD>"
    Then I wait for 2 seconds
    Then I click sign in 
    Then I wait for 2 seconds
    Then I Navigate to page "<CODE_INJECTION_SETTING_PAGE>"
    Then I wait for 2 seconds
    Then I enter a new header html code "<CODE_INJECTION_HEADER>"
    Then I wait for 2 seconds
    Then I enter a new footer html code "<CODE_INJECTION_FOOTER>"
    Then I wait for 2 seconds
    Then I click on Save new code injection
    Then I wait for 2 seconds
    Then I Navigate to page "<ADMIN_PAGE>"
    Then I wait for 2 seconds