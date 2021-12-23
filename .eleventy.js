module.exports = function (config) {
  config.addPassthroughCopy({ 'src/_assets/media': 'media' });
  config.addPassthroughCopy({ 'src/_assets/icons': 'icons' });
  
  // Check the robots.txt file before deploying to production
  config.addPassthroughCopy('src/robots.txt');

  return {
    dir: {
      input: 'src',
      output: 'web',
    },
    dataTemplateEngine: 'njk',
    templateFormats: ['njk', 'md'],
  };
};