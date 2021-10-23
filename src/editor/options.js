import { __ } from "@wordpress/i18n";
import { arrowLeft, arrowRight, arrowUp, arrowDown } from "@wordpress/icons";

/**
 * Setting options.
 */
export const settings = {
	shiftBlock: { type: "string", default: "" },
	maxWidth: { type: "string", default: "" },
	paddingTop: { type: "string", default: "" },
	paddingRight: { type: "string", default: "" },
	paddingBottom: { type: "string", default: "" },
	paddingLeft: { type: "string", default: "" },
	marginTop: { type: "string", default: "" },
	marginRight: { type: "string", default: "" },
	marginBottom: { type: "string", default: "" },
	marginLeft: { type: "string", default: "" },
	hideSmall: { type: "boolean", default: false },
	hideMedium: { type: "boolean", default: false },
	hideLarge: { type: "boolean", default: false },
	animationIn: { type: "string", default: "" },
};

/**
 * Default animation options.
 */
export const sizes = [
	{ label: __("-", "xtnd"), full: __("None", "xtnd"), value: "" },
	{ label: __("sm", "xtnd"), full: __("Small", "xtnd"), value: "sm" },
	{ label: __("md", "xtnd"), full: __("Medium", "xtnd"), value: "md" },
	{ label: __("lg", "xtnd"), full: __("Large", "xtnd"), value: "lg" },
];

/**
 * Shift block options.
 */
export const shift = {
	up: {
		icon: arrowUp,
		title: __("Shift up", "xtnd"),
	},
	right: {
		icon: arrowRight,
		title: __("Shift right", "xtnd"),
	},
	down: {
		icon: arrowDown,
		title: __("Shift down", "xtnd"),
	},
	left: {
		icon: arrowLeft,
		title: __("Shift left", "xtnd"),
	},
};

/**
 * Default animation options.
 */
export const animations = [
	{ label: __("None", "xtnd"), value: "" },
	{ label: __("Fade in", "xtnd"), value: "fade-in" },
	{ label: __("Fade up", "xtnd"), value: "fade-up" },
	{ label: __("Fade down", "xtnd"), value: "fade-down" },
	{ label: __("Fade left", "xtnd"), value: "fade-left" },
	{ label: __("Fade right", "xtnd"), value: "fade-right" },
];
