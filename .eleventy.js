module.exports = function (config) {
  config.addPassthroughCopy({ 'src/assets/media': 'media' });
  config.addPassthroughCopy({ 'src/assets/icons': 'icons' });
  config.addPassthroughCopy({ 'src/assets/admin': 'admin'});
  
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