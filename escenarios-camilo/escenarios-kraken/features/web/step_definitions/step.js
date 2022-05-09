const { Given, When, Then } = require("@cucumber/cucumber");

When("I Navigate to page {kraken-string}", async function (page) {
  return await this.driver.url(page);
});

When("I enter the blog name {kraken-string}", async function (blogName) {
  let element = await this.driver.$("#blog-title");
  return await element.setValue(blogName);
});

When("I enter the full name {kraken-string}", async function (name) {
  let element = await this.driver.$("#name");
  return await element.setValue(name);
});

When("I enter the email {kraken-string}", async function (email) {
  let element = await this.driver.$("#email");
  return await element.setValue(email);
});

When("I enter the password created {kraken-string}", async function (password) {
  let element = await this.driver.$("#password");
  return await element.setValue(password);
});

When("I click staff invite users", async function () {
  let element = await this.driver.$("#ember29");
  return await element.click();
});

When("I click the textarea to invite a new user", async function () {
  let element = await this.driver.$("#ember33");
  return await element.click();
});

When("I click invite user", async function () {
  let element = await this.driver.$("#ember34");
  return await element.click();
});

When(
  "I enter the password to sign in {kraken-string}",
  async function (password) {
    let element = await this.driver.$("#ember10");
    return await element.setValue(password);
  }
);

When("I click sign in button in login page", async function () {
  let element = await this.driver.$("#ember12");
  return await element.click();
});

When("I click in the post area", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/section/div[1]/div[1]/article/div[1]/div"
  );
  return await element.click();
});

When("I click publish", async function () {
  let element = await this.driver.$(
    "/html/body/div[2]/div/main/section/header/section/div/div[1]"
  );
  return await element.click();
});

When("I click on Tags", async function () {
  let element = await this.driver.$('a[href="#/tags/"]');
  return await element.click();
});

When("I click New Tags", async function () {
  let element = await this.driver.$('a[href="#/tags/new/"]');
  return await element.click();
});

When("I click on the tag name area", async function () {
  let element = await this.driver.$("#tag-name");
  return await element.click();
});

When("I enter a tag name {kraken-string}", async function (tag_name) {
  let element = await this.driver.$("#tag-name");
  return await element.setValue(tag_name);
});

When("I click on save tag", async function () {
  let element = await this.driver.$(".gh-btn-blue");
  return await element.click();
});

When("I click on the first tag", async function () {
  let element = await this.driver.$('a[href="#/tags/tag-prueba/"]');
  return await element.click();
});

When("I click on the tag description area", async function () {
  let element = await this.driver.$("#tag-description");
  return await element.click();
});

When(
  "I enter a tag description {kraken-string}",
  async function (tag_description) {
    let element = await this.driver.$("#tag-description");
    return await element.setValue(tag_description);
  }
);

When("I click on delete tag", async function () {
  let element = await this.driver.$(".gh-btn-red");
  return await element.click();
});

When("I click on delete tag definitively", async function () {
  let element = await this.driver.$(
    "button.gh-btn.gh-btn-red.gh-btn-icon.ember-view"
  );
  return await element.click();
});

When("I enter login email {kraken-string}", async function (email) {
  let element = await this.driver.$(".email");
  return await element.setValue(email);
});

When("I enter login password {kraken-string}", async function (password) {
  let element = await this.driver.$(".password");
  return await element.setValue(password);
});

When("I click sign in", async function () {
  let element = await this.driver.$(".login");
  return await element.click();
});

When("I click on Staff", async function () {
  let element = await this.driver.$('a[href="#/staff/"]');
  return await element.click();
});

When("I click on the Invite People button", async function () {
  let element = await this.driver.$(".gh-btn-green");
  return await element.click();
});

When("I enter staff email {kraken-string}", async function (staff_member) {
  let element = await this.driver.$("#new-user-email");
  return await element.setValue(staff_member);
});

When("I click on send invitation now", async function () {
  let element = await this.driver.$(
    "button.gh-btn.gh-btn-green.gh-btn-icon.ember-view"
  );
  return await element.click();
});

When("I click on revoke button", async function () {
  let element = await this.driver.$('a[href="#revoke"]');
  return await element.click();
});

// Camilo

When("I click on nigth shift toggle button", async function () {
    let element = await this.driver.$(
      "span.input-toggle-component"
    );
    return await element.click();
});
When("I click on expand Title and Description section", async function () {
    let element = await this.driver.$(
      "/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[2]/button"
    );
    return await element.click();
});
When("I enter a new Blog Name {kraken-string}", async function (new_blog_name) {
    let element = await this.driver.$(
        "/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[1]/div[3]/div/div/div[1]/input"
    );
    return await element.setValue(new_blog_name);
});
When("I enter a new Blog Description {kraken-string}", async function (new_blog_description) {
    let element = await this.driver.$(
        "/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[1]/div[3]/div/div/div[2]/input"
    );
    return await element.setValue(new_blog_description);
});
When("I click on Save General Settings", async function () {
    let element = await this.driver.$(
        "/html/body/div[2]/div/main/section/div/header/section/button"
    );
    return await element.click();
});
When("I enter a new submenu label {kraken-string}", async function (new_submenu_label) {
    let element = await this.driver.$(
        "/html/body/div[2]/div/main/section/section/div[2]/form/div[2]/div/span[1]/input"
    );
    return await element.setValue(new_submenu_label);
});
When("I enter a new submenu url {kraken-string}", async function (new_submenu_url) {
    let element = await this.driver.$(
        "/html/body/div[2]/div/main/section/section/div[2]/form/div[2]/div/span[2]/input"
    );
    return await element.setValue(new_submenu_url);
});
When("I click on Save Design Settings", async function () {
    let element = await this.driver.$(
        "/html/body/div[2]/div/main/section/header/section/button"
    );
    return await element.click();
});
When("I click on Add new submenu in Navbar", async function () {
    let element = await this.driver.$(
        "/html/body/div[2]/div/main/section/section/div[2]/form/div[2]/button"
    );
    return await element.click();
});
When("I click on Remove new submenu in Navbar", async function () {
    let element = await this.driver.$(
        "/html/body/div[2]/div/main/section/section/div[2]/form/div[1]/div[5]/div/button"
    );
    return await element.click();
});
When("I click on expand Social Network section", async function () {
    let element = await this.driver.$(
      "/html/body/div[2]/div/main/section/div/section/div[8]/div/div[2]/button"
    );
    return await element.click();
});
When("I enter a new Facebook page url {kraken-string}", async function (new_fb_url) {
    let element = await this.driver.$(
        "/html/body/div[2]/div/main/section/div/section/div[8]/div/div[1]/div[3]/div/div/div[1]/input"
    );
    return await element.setValue(new_fb_url);
});
When("I enter a new Twitter page url {kraken-string}", async function (new_tw_url) {
    let element = await this.driver.$(
        "/html/body/div[2]/div/main/section/div/section/div[8]/div/div[1]/div[3]/div/div/div[2]/input"
    );
    return await element.setValue(new_tw_url);
});
When("I enter a new header html code {kraken-string}", async function (new_header_html_code) {
    let element = await this.driver.$(
        "/html/body/div[2]/div/main/section/section/form/fieldset/div/div[1]/div/div/div[6]/div[1]/div/div/div/div[5]"
    );
    return await element.setValue(new_header_html_code);
});
When("I enter a new footer html code {kraken-string}", async function (new_footer_html_code) {
    let element = await this.driver.$(
        "/html/body/div[2]/div/main/section/section/form/fieldset/div/div[2]/div/div/div[6]/div[1]/div/div/div/div[5]"
    );
    return await element.setValue(new_footer_html_code);
});
When("I click on Save new code injection", async function () {
    let element = await this.driver.$(
        "/html/body/div[2]/div/main/section/header/section/button"
    );
    return await element.click();
});


