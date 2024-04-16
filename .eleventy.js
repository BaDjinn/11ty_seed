module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./assets/css/style.css");
	eleventyConfig.addPassthroughCopy("./assets/img");
	eleventyConfig.addPassthroughCopy("./assets/favicon");
};