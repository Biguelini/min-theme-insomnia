const { makeTheme, themes } = require("./themes/min.js");

const minThemes = [
	makeTheme(themes.dark),
	makeTheme(themes.light)
];

module.exports.themes = [...minThemes];
