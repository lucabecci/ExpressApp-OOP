const config = {
  DB: {
    URI: "mongodb://localhost/pooexpress",
    USER: "",
    PASSWORD: "",
  },
  // eslint-disable-next-line no-undef
  PORT: process.env.PORT || 4000,
};

module.exports = config;
