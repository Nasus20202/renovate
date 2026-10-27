module.exports = {
  // Pin everything to immutable digests: GitHub Actions to commit SHAs (keeping
  // the version as a comment), and Docker/Kubernetes images to sha256 digests.
  // Use Conventional Commit messages for Renovate's commits.
  extends: [
    "helpers:pinGitHubActionDigestsToSemver",
    ":pinDigests",
    ":semanticCommits",
  ],

  branchPrefix: "renovate/",

  onboarding: true,
  requireConfig: "required",
  platform: "github",
  osvVulnerabilityAlerts: true,
  dependencyDashboardOSVVulnerabilitySummary: "unresolved",
  configMigration: true,
  onboardingConfig: {
    "$schema": "https://docs.renovatebot.com/renovate-schema.json",
    "extends": ["config:recommended"],
    "packageRules": [
      {
        "matchUpdateTypes": ["minor", "patch"],
        "automerge": true
      }
    ]
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
