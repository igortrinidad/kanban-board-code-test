const { defineConfig } = require("cypress");

module.exports = defineConfig({

  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 0,
  defaultCommandTimeout: 20000,

  
  e2e: {
    specPattern: [
      'tests/e2e/**/*.cy.{js,jsx,ts,tsx}',
      'cypress/integration/**/*.cy.{js,jsx,ts,tsx}'
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config
    },
    supportFile: 'tests/e2e/support/e2e.js'
  },

  env: {
    projectId: process.env.CYPRESS_PROJECT_ID,
    RECORD_KEY: '',
    APP_BASE_URL: 'http://localhost:8080'
  },
  
})
