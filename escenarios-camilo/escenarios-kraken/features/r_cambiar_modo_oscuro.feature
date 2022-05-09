Feature: Opciones

@user1 @web
Scenario: Cambiar modo oscuro
    Given I wait
    Then I Navigate to page "<LOGIN_PAGE>"
    Then I wait for 2 seconds
    Then I enter login email "<EMAIL>"
    Then I wait for 2 seconds
    Then I enter login password "<PASSWORD>"
    Then I wait for 2 seconds
    Then I click sign in 
    Then I wait for 2 seconds
    Then I Navigate to page "<OPTION_LABS_PAGE>"
    Then I wait for 2 seconds
    Then I click on nigth shift toggle button
    Then I wait for 2 seconds
    Then I click on nigth shift toggle button
    Then I wait for 2 seconds