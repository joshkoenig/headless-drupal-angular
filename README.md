Headless Drupal + AngularJS
=======================

A working "Headless Drupal" example implementation - an AngularJS app set up to talk to Drupal 8 vis the rest.module.

## See a demonstration online:
### http://dev-headless-drupal-8.gotpantheon.com/

This is a quick and dirty demo, intended as a starting place for discussion, and to help others get hacking quickly. There's a _lot_ of work TODO.

Pull requests are welcome.

## Quickstart

1. Clone this repo, run ```bower install``` and the
2. Visit app/index.html

You are now seeing content pulled from the Drupal 8 instance backing the demo site that I have running on Pantheon. Feel free to start experimenting with your own Angular implementation. Or start a demo with another framework!

## Running it w/your own Drupal Install

Going beyond the most basic demo, you will likely want to customize the back-end a little bit as well. Getting your own up and running is pretty simple:

1. Start with a fresh Drupal 8 instance. [Use Pantheon if you like](https://www.getpantheon.com/d8)
2. Enable all the core REST Services module.
3. Copy in the provided rest.settings.yml configuration.
4. Change the ```mySite``` variable at the top of ```app.js``` or ```alt.js``` to point to your own site.
5. ???
6. Profit!


## TODO:

- Expand this Readme.md to explain how it works.
- Fixing whatever I've done n00bishly in Angular
- Better packaging/documentation of how to configure Drupal.
- Extend DEMO to include CRUD for nodes.
- Add custom routes to the demo.
