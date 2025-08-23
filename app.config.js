module.exports = ({ config }) => {
  const isProd = process.env.EAS_BUILD_PROFILE === "production";

  return {
    ...config,
    name: isProd ? "Meami" : "Meami Debug",

    android: {
      ...config.android,
      package: isProd ? "com.meami.app" : "com.meami.app.debug",
    },
  };
};
