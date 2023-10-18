const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  projectId: 'jogimj',
  reporter: 'cypress-mochawesome-reporter',
  e2e: 
  {
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) 
    {
      // implement node event listeners here
      on('task', {downloadFile})
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  }, 
});

