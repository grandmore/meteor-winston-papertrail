meteor-winston-papertrail
===============
A wrapper around [winston-papertrail](https://github.com/kenperkins/winston-papertrail) for using [Papertrail](https://papertrailapp.com) transport with [winston](https://github.com/flatiron/winston.git) for use with [Meteorite](https://github.com/oortcloud/meteorite) on top of [Meteor](http://meteor.com) :)


##Install
mrt add winston-papertrail

##Usage

Winston is exposed as:

``` js
Winston
```

And papertrail transport is exposed as:

``` js
Winston_Papertrail
```

so it can be used as follows:

Create a file called logging.js in the lib folder in the root or your app. 
The Lib folder is called first so that loging is exposed early on.

Don't forget to change PORT to the port number provided to you by PapertailApp.com.

``` js
if(Meteor.isServer) {
  
  //creating a global server logger
  log = Winston;
  
  log.add( Winston_Papertrail, {
  	levels: {
  		debug: 0,
  		info: 1,
  		warn: 2,
  		error: 3,
  		auth: 4
  	},
  	colors: {
  		debug: 'blue',
  		info: 'green',
  		warn: 'red',
  		error: 'red',
  		auth: 'red'
  	},
  
  	host: "logs.papertrailapp.com",
  	port: PORT, 
  	handleExceptions: true,
  	json: true,
  	colorize: true,
  	logFormat: function(level, message) {
  		return level + ': ' + message;
  	}
  });
}
```
You can paste this at the bottom of the logging.js code to test that it is working correctly.

``` js
log.info(" =====> Meteor App restarted "+ new Date( Date.now()) +" <=====");
```
See winston-papertrail [documentation](https://github.com/stuartfenton/meteor-winston-papertrail) for more details.
