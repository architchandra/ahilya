const yaml = require("js-yaml");
const { DateTime } = require("luxon");



module.exports = function (config) {
  // Use YAML for data files
  config.addDataExtension("yml", contents => yaml.load(contents));
  
  config.addPassthroughCopy({ 'src/_assets/media': 'media' });
  config.addPassthroughCopy({ 'src/_assets/icons': 'icons' });
  
  // Check the robots.txt file before deploying to production
  config.addPassthroughCopy('src/robots.txt');

  config.addFilter('postDate', function(date) {
    return DateTime.fromJSDate(date).toFormat('d LLLL y');
  });
  config.addFilter('dateTime', function(date) {
    return DateTime.fromJSDate(date);
  });
  config.addFilter('version', function (value) {
    const now = String(Date.now());
    return value + '?v' + now;
  });

  return {
    dir: {
      input: 'src',
      output: 'web',
    },
    dataTemplateEngine: 'njk',
    templateFormats: ['njk', 'md'],
  };
};