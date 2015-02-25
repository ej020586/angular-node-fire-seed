# Angular Node Fire Seed

## Installing the app

- Install [Git](https://help.github.com/articles/set-up-git).
- Install [Node.js](http://nodejs.org/).
- Clone the repo
- Go to the repo root directory
- Run `npm install` to install the Node modules.
- Run `./node_modules/.bin/bower install` to install the front-end dependencies.
- Run `./node_modules/.bin/webdriver-manager update` to install or update the webdriver dependencies.
- Run `git submodule init` then `git submodule update` to initialize & update the submodule(s).
- Copy the `config/config-example.json` to `config/config.json`. The `config/config.json` is ignored by Git so you can make any local changes there.