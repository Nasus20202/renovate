module.exports = {
  branchPrefix: "renovate/",

  onboarding: true,
  requireConfig: "required",
  platform: "github",
  logLevel: "debug",
  printConfig: true,
  onboardingConfig: {
    extends: ["config:recommended"],
  },

  autodiscover: true,
  autodiscoverFilter: ["Nasus20202/*"],

  gitAuthor:
    "Renovate Cat <294440874+renovate-cat[bot]@users.noreply.github.com>",
  username: "renovate-cat[bot]",
};
