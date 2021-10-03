/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // But you can create a sidebar manually
  tutorialSidebar: [
    'getting-started',
    {
      'Tutorials': ['tutorials/api_search', 'tutorials/maven', 'details/contributing'],
      'Modpacks': [
        'modpacks/format_definition',
        'modpacks/creating_modpacks',
      ],
      'Migrations': ['migrations/migrations-info', 'migrations/v1-to-v2'],
      'API Information': ['details/versioning', 'details/domains'],
    }
  ],
};
