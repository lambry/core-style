import { __ } from "@wordpress/i18n";
import { defaultHooks } from "@wordpress/hooks";
import { arrowLeft, arrowRight, arrowUp, arrowDown } from "@wordpress/icons";

/**
 * Supported block types.
 */
export const supportsShift = defaultHooks.applyFilters("coreStyle.supportsShift", [
	"core/group", "core/columns", "core/media-text", "core/image", "core/video"
]);
export const supportsMaxWidth = defaultHooks.applyFilters("coreStyle.supportsMaxWidth", [
	"core/group", "core/heading", "core/paragraph", "core/quote", "core/list"
]);
export const supportsPadding = defaultHooks.applyFilters("coreStyle.supportsPadding", [
	"core/group", "core/cover", "core/buttons"
]);
export const supportedBlocks = [...supportsShift, ...supportsMaxWidth, ...supportsPadding];

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
