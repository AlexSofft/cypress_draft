const { defineConfig } = require("cypress");
const fs = require("fs-extra");
const path = require("path");

const fetchConfigurationByFile = file => {
  const pathOfConfigurationFile = `config/cypress.${file}.json`;

  return (
    file && fs.readJson(path.join(__dirname, "../", pathOfConfigurationFile))
  );
};

module.exports = defineConfig({

  e2e: {
    baseUrl: 'https://www.theguarantors.com/',
    env: {
      email: 'qasthpark@gmail.com',
      password: 'MJwilson83',
    },
    setupNodeEvents(on, config) {
      // const environment = config.env.configFile || 'dev'
      // const configurationForEnvironment = fetchConfigurationByFile(environment);
      // return configurationForEnvironment || config;
    },
  },
});
