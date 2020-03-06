# Slack To ServiceNow Integration

📲📥Slack To ServiceNow Api is a NodeJS application for creating a service now ticket within Slack and pushing this to the ServiceNow API

## Installation

Use the package manager [npm](https://docs.npmjs.com/getting-started/) 

```bash
npm install slackToServiceNowApi
```

## Usage

We set up our application by adding the below code:

```javascript

const { createEventAdapter } = require('@slack/events-api');
const slackSigningSecret = process.env.SLACK_SIGNING_SECRET;
const slackEvents = createEventAdapter(slackSigningSecret);
 
// Read the port from the environment variables, fallback to 3000 default.
const port = process.env.PORT || 3000;
 
(async () => {
  // Start the built-in server
  const server = await slackEvents.start(port);
 
  // Log a message when the server is ready
  console.log(`Listening for events on ${server.address().port}`);
})();


```

## Built With :hammer_and_wrench:

* [NodeJS](https://nodejs.org/en/docs/) - a JavaScript runtime built on Chrome's V8 JavaScript engine. Version 12.16.1 LTS
* [Express](https://expressjs.com/en/starter/installing.html) - Dependency Management. Default package manager for the JS runtime environment Node.js
* [NPM](https://docs.npmjs.com/) - Dependency Management. Default package manager for the JS runtime environment Node.js
* [Slack Web API](https://www.npmjs.com/package/@slack/web-api) - a package that contains a simple, convenient, and configurable HTTP client for making requests to Slack's Web API, with over 130 methods.
* [Slack Events API](https://www.npmjs.com/package/@slack/events-api) - a package taht helps your app respond to events from Slack's Events API such as new messages, emoji reactions, files, and much more.
* [ServiceNow API](https://developer.servicenow.com/app.do#!/home) - A software-as-a-service provider, providing technical management support, such as IT service management, to the IT operations of large corporations, including providing help desk functionality
* [Jasmine](https://jasmine.github.io/setup/nodejs.html) - A behavior-driven development framework for testing JavaScript code.
* [Nodemon](https://github.com/remy/nodemon#nodemon) - A utility that will monitor for any changes in your source and automatically restart your server. Perfect for development. Install it using npm.[devDependency]
* [Node Slack SDK](https://github.com/slackapi/node-slack-sdk) - Slack Developer Kit for Node.js.
* [ES6/ES7](http://es6-features.org/#Constants | https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/ECMAScript_Next_support_in_Mozilla#ECMAScript_2017) - ECMAScript Next refers to new features of the ECMA-262 standard (commonly referred to as JavaScript) introduced after ECMAScript 2015. New versions of ECMAScript specifications are released yearly.

## Contributing :open_hands:
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Reference
Inspired by this refernce [here](https://medium.com/@JeffManville/how-to-integrate-servicenow-slacks-slash-commands-ecbddaa7a96a)

## Authors :book:
* **Jake Westerfield** - *Primary Work*

## License :microscope:
[MIT](https://choosealicense.com/licenses/mit/)