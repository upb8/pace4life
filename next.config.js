const path = require("path");

module.exports = {
  webpack: (config) => {
    const sourcePath = __dirname + "/src";
    config.resolve.alias["app@public"] = path.resolve(__dirname, "public");
    config.resolve.alias["@utils"] = path.resolve(sourcePath, "utils");
    config.resolve.alias["@style-utils"] = path.resolve(
      sourcePath,
      "style-utils"
    );
    config.resolve.alias["@context"] = path.resolve(sourcePath, "context");
    config.resolve.alias["@components"] = path.resolve(
      sourcePath,
      "components"
    );
    config.resolve.alias["app@graphql"] = path.resolve(sourcePath, "graphql");
    config.resolve.alias["app@hooks"] = path.resolve(sourcePath, "hooks");
    config.resolve.alias["@screens"] = path.resolve(sourcePath, "screens");
    return config;
  },
};
