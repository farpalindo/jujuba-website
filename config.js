require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: 'mongodb+srv://admin:admin@cluster0.uc0cy.mongodb.net/banksarty?retryWrites=true&w=majority',
  SECRET: '98a90usda27m0d78a0s97d02asdasdawd2',
  DISCORD_CLIENT_ID: '970134090152034354',
  DISCORD_CLIENT_SECRET: 'oiK5qN2R36nqHDG29FPh2eHuCyQDfvrt',
  DISCORD_CLIENT_REDIRECT: '/callback',
};
