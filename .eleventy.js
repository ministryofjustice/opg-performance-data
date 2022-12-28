const markdownItGds = require('./markdown-it-gds');
const percentFilter = require('./src/filters/percent-filter');
const performanceFilter = require('./src/filters/performance-filter.js');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ 'node_modules/govuk-frontend/govuk/assets': 'assets' })
    eleventyConfig.addPassthroughCopy({ 'src/_includes/css': 'assets' })
    eleventyConfig.addPassthroughCopy({ 'src/_includes/assets': 'assets' })
    eleventyConfig.addPassthroughCopy({ 'src/_includes/budget.json': 'budget.json' })

    eleventyConfig.addFilter('log', value => {
        console.log(value)
    })

    eleventyConfig.addFilter('performanceFilter', performanceFilter);
    eleventyConfig.addFilter('percentFilter', percentFilter);

    eleventyConfig.setLibrary('md', markdownItGds());

    return {
        dir: { input: 'src', output: '_site', data: '_data' },
        templateFormats: ['njk', 'md', 'css', 'html', 'yml'],
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true
    }
}
