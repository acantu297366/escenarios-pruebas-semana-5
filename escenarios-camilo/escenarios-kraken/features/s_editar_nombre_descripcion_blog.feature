Feature: Opciones

@user1 @web
Scenario: Cambiar nombre y descripción del Blog
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
    Then I click on expand Title and Description section
    Then I wait for 2 seconds
    Then I enter a new Blog Name "<BLOG_NAME>"
    Then I wait for 2 seconds
    Then I enter a new Blog Description "<BLOG_DESCRIPTION>"
    Then I wait for 2 seconds
    Then I click on Save General Settings
    Then I wait for 2 seconds
    Then I Navigate to page "<ADMIN_PAGE>"
    Then I wait for 5 seconds
    Then I Navigate to page "<GENERAL_SETTING_PAGE>"
    Then I wait for 2 seconds
    Then I enter a new Blog Name "<OLD_BLOG_NAME>"
    Then I wait for 2 seconds
    Then I enter a new Blog Description "<OLD_BLOG_DESCRIPTION>"
    Then I wait for 2 seconds
    Then I click on Save General Settings
    Then I wait for 2 seconds
    Then I Navigate to page "<ADMIN_PAGE>"
    Then I wait for 2 seconds