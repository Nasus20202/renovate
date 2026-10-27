module.exports = {
  branchPrefix: "renovate/",

  onboarding: true,
  requireConfig: "required",
  platform: "github",
  onboardingConfig: {
    "$schema": "https://docs.renovatebot.com/renovate-schema.json",
    "extends": ["github>Nasus20202/renovate"]
  },
  hostRules: [
    {
      matchHost: "ghcr.io",
      hostType: "docker",
      username: process.env.RENOVATE_GHCR_USERNAME,
      password: process.env.RENOVATE_GHCR_PASSWORD,
    },
  ],

  autodiscover: true,
  autodiscoverFilter: ["Nasus20202/*"],

  // Repos can run postUpgradeTasks. Safe to allow everything because autodiscover
  // is limited to Nasus20202/* and config is only read from default branches.
  allowedCommands: [".*"],

  gitAuthor:
    "Renovate Cat <294440874+renovate-cat[bot]@users.noreply.github.com>",
  username: "renovate-cat[bot]",
  prFooter: "🐱 Meow. Dependencies updated by Renovate Cat.",
};
