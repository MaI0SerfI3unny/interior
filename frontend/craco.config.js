const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@Components": path.resolve(__dirname, "src/_components"),
      "@So_on": path.resolve(__dirname, "src/so_on"),
    },
  },
};
