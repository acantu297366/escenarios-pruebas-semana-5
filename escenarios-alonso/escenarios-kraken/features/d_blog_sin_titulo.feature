Feature: Cuenta

@user1 @web
Scenario: el titulo del blog se encuentra vacio
  Given I wait
  Then I Navigate to page "<PAGINA_SETUP_ONE>"
  And I wait for 1 seconds
  Then I Navigate to page "<PAGINA_SETUP_TWO>"
  And I wait for 5 seconds
  Then I enter the blog name "<BLOG_TITLE_EMPTY>"
  Then I enter the full name "<FULL_NAME>"
  Then I enter the email "<EMAIL>"
  Then I enter the password created "<PASSWORD>"
  And I wait for 5 seconds
  Then I click staff invite users
  And I wait for 5 seconds
