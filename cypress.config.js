const { defineConfig } = require("cypress");

module.exports = defineConfig({
 
  
  e2e: {
    baseUrl: "http://www.automationpractice.pl/",
    includeShadowDom: true,
  chromeWebSecurity: true,
  viewportHeight: 1080,
  viewportWidth: 1920,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
