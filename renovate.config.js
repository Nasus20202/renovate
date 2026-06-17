module.exports = {
  branchPrefix: "renovate/",

  onboarding: true,
  requireConfig: "required",
  platform: "github",
  onboardingConfig: {
    extends: ["config:recommended"],
  },
  hostRules: [
    {
      matchHost: 'ghcr.io',
      hostType: 'docker',
      username: process.env.RENOVATE_GHCR_USERNAME,
      password: process.env.RENOVATE_GHCR_TOKEN,
    },
  ],

  autodiscover: true,
  autodiscoverFilter: ["Nasus20202/*"],

  gitAuthor:
    "Renovate Cat <294440874+renovate-cat[bot]@users.noreply.github.com>",
  username: "renovate-cat[bot]",
};
