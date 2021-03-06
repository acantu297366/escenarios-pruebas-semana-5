Feature: Cuenta

@user1 @web
Scenario: formato de correo no valido
  Given I wait
  Then I Navigate to page "<PAGINA_SETUP_ONE>"
  And I wait for 1 seconds
  Then I Navigate to page "<PAGINA_SETUP_TWO>"
  And I wait for 5 seconds
  Then I enter the blog name "<BLOG_NAME>"
  Then I enter the full name "<FULL_NAME>"
  Then I enter the email "<EMAIL_NO_VALIDO>"
  Then I enter the password created "<PASSWORD>"
  And I wait for 5 seconds
  Then I click staff invite users
  Then I wait for 5 seconds
