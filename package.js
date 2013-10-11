Package.describe({
  summary: 'A Winston Papertrail transport for Meteorite on top of Meteor.'
});

Npm.depends({
    "winston": "0.7.2",
    "winston-papertrail": "0.1.4"
});

Package.on_use(function (api, where) {
  // api.use('winston', 'server');

  api.add_files('winston-papertrail.js', 'server');
  if(api.export){
    api.export('Winston_Papertrail');
  }
});