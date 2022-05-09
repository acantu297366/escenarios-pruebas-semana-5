Feature: Opciones

@user1 @web
Scenario: Cambiar link de las redes sociales
    Given I wait
    Then I Navigate to page "<LOGIN_PAGE>"
    Then I wait for 2 seconds
    Then I enter login email "<EMAIL>"
    Then I wait for 2 seconds
    Then I enter login password "<PASSWORD>"
    Then I wait for 2 seconds
    Then I click sign in 
    Then I wait for 2 seconds
    Then I Navigate to page "<GENERAL_SETTING_PAGE>"
    Then I wait for 2 seconds
    Then I click on expand Social Network section
    Then I wait for 2 seconds
    Then I enter a new Facebook page url "<FB_URL>"
    Then I wait for 2 seconds
    Then I enter a new Twitter page url "<TW_URL>"
    Then I wait for 2 seconds
    Then I click on Save General Settings
    Then I wait for 2 seconds
    Then I Navigate to page "<ADMIN_PAGE>"
    Then I wait for 5 seconds
    Then I Navigate to page "<GENERAL_SETTING_PAGE>"
    Then I wait for 2 seconds
    Then I enter a new Facebook page url "<OLD_FB_URL>"
    Then I wait for 2 seconds
    Then I enter a new Twitter page url "<OLD_TW_URL>"
    Then I wait for 2 seconds
    Then I click on Save General Settings
    Then I wait for 2 seconds
    Then I Navigate to page "<ADMIN_PAGE>"
    Then I wait for 2 seconds