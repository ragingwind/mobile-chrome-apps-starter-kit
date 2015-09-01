#!/usr/bin/env node

var path = require('path');
var del = require('del');

var targets = [
  '../../www/app/bower_components/web-animations-js/web-animations.min.js.gz',
  '../../www/app/bower_components/platinum-push-messaging/demo'
].map(function (target) {
  return path.resolve(__dirname, target);
});

module.exports = function () {
  console.log('Check a archive in dist path to removed to build successfully: \n', targets);
  del.sync(targets, {force: true});
};
