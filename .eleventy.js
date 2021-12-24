const yaml = require("js-yaml");



module.exports = function (config) {
  // Use YAML for data files
  config.addDataExtension("yml", contents => yaml.load(contents));
  
  config.addPassthroughCopy({ 'src/_assets/media': 'media' });
  config.addPassthroughCopy({ 'src/_assets/icons': 'icons' });
  
  // Check the robots.txt file before deploying to production
  config.addPassthroughCopy('src/robots.txt');

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