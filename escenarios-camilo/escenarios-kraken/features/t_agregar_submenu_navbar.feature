Feature: Opciones

@user1 @web
Scenario: Agregar un submenú al Navbar
    Given I wait
    Then I Navigate to page "<LOGIN_PAGE>"
    Then I wait for 2 seconds
    Then I enter login email "<EMAIL>"
    Then I wait for 2 seconds
    Then I enter login password "<PASSWORD>"
    Then I wait for 2 seconds
    Then I click sign in 
    Then I wait for 2 seconds
    Then I Navigate to page "<DESIGN_SETTING_PAGE>"
    Then I wait for 2 seconds
    Then I enter a new submenu label "<SUBMENU_LABEL>"
    Then I wait for 2 seconds
    Then I enter a new submenu url "<ADMIN_PAGE>"
    Then I wait for 2 seconds
    Then I click on Add new submenu in Navbar
    Then I wait for 2 seconds
    Then I click on Save Design Settings
    Then I wait for 2 seconds
    Then I Navigate to page "<ADMIN_PAGE>"
    Then I wait for 5 seconds
    Then I Navigate to page "<DESIGN_SETTING_PAGE>"
    Then I wait for 2 seconds
    Then I click on Remove new submenu in Navbar
    Then I wait for 2 seconds
    Then I click on Save Design Settings
    Then I wait for 2 seconds
    Then I Navigate to page "<ADMIN_PAGE>"
    Then I wait for 2 seconds