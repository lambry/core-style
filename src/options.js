import { __ } from "@wordpress/i18n";
import { arrowLeft, arrowRight, arrowUp, arrowDown } from "@wordpress/icons";

/**
 * Supported block types.
 */
export const extended = ["core/group", "core/cover"];

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
	marginLeft: { type: "string", default: "" }
};

/**
 * Default sizing options.
 */
 export const sizes = [
	{ label: __("-"), value: "" },
	{ label: __("sm"), value: "sm" },
	{ label: __("md"), value: "md" },
	{ label: __("lg"), value: "lg" },
];

/**
 * Shift block options.
 */
export const shift = {
	up: {
		icon: arrowUp,
		title: __("Shift up"),
	},
	right: {
		icon: arrowRight,
		title: __("Shift right"),
	},
	down: {
		icon: arrowDown,
		title: __("Shift down"),
	},
	left: {
		icon: arrowLeft,
		title: __("Shift left"),
	},
};
