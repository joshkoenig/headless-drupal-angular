Headless Drupal + AngularJS
=======================

A working "Headless Drupal" example implementation - an AngularJS app set up to talk to Drupal 8 vis the rest.module.

## See a demonstration online:
### http://dev-headless-drupal-8.gotpantheon.com/

This is a quick and dirty demo, intended as a starting place for discussion, and to help others get hacking quickly. There's a _lot_ of work TODO.

Pull requests are welcome.

## Setup

1. Start with a fresh Drupal 8 instance. [Use Pantheon if you like](https://www.getpantheon.com/d8)
2. Enable all the core REST Services module.
3. Copy in the provided rest.settings.yml configuration.
4. Stick the "app" code in the same webroot as your Drupal install.
5. Visit index.html
6. ????
7. Profit!

## TODO:

- Expand this Readme.md to explain how it works.
- Fixing whatever I've done n00bishly in Angular (e.g. proper bower package, etc)
- Better packaging/documentation of how to configure Drupal.
- Extend DEMO to include CRUD for nodes.
- Add custom routes to the demo.
